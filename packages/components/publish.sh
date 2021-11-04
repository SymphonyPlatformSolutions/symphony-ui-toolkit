#!/bin/bash
set -e
# Execute publish
function executePublish {
    cp package.json dist/
    cp README.md dist/
    cd dist
    npm publish --access public
    cd ..
    git add package.json
    git config --global user.email "$GIT_USEREMAIL"
    git config --global user.name "$GIT_USERNAME"
    git commit -m "[skip ci] AUTO Bump version"
    git push origin HEAD:master
}

# Set version
function setVersion {
    echo "Found tag, setting version to $CIRCLE_TAG"
    npm --no-git-tag-version version ${CIRCLE_TAG//v}
}

# Version and publish logic
function publish() {
    echo "Running publish..."
    setVersion;
    executePublish;
    postToUniversalWebhook;
    echo "Publish End"
}

function postToUniversalWebhook() {
    curl --location --request POST "$WEBHOOK_CONTRIBUTORS_URL" -F 'message=@webhook/publish-comps.xml' -F 'data={"version": { "components": "'"$CIRCLE_TAG"'" }}'
}

# ====> Start
if [ -z "$CIRCLE_TAG" ]; then
    echo "No tag, skip publish ..."
    exit 0;
else
    publish
fi

