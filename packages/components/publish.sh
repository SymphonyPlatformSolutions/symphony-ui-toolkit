#!/bin/bash
set -e
# Execute publish
function executePublish {
    cp package.json dist/
    cp README.md dist/
    cd dist
#    yarn publish --access public #Temporaty disable publish
    echo "[MOCK COMPONENTS] yarn publish"
    cd ..
    #git add package.json
    #git config --global user.email "$GIT_USEREMAIL"
    #git config --global user.name "$GIT_USERNAME"
    #git commit -m "[skip ci] AUTO Bump version"
    #git push origin HEAD:master
}

# Set version
#function setVersion {
#    echo "Found tag, setting version to $CIRCLE_TAG"
#    yarn version --no-git-tag-version --new-version ${CIRCLE_TAG//v}
#}

# Version and publish logic
function publish() {
    echo "Running UI-Toolkit Components publish..."
#    setVersion;
    executePublish;
#    postToUniversalWebhook; # Temporary disable notification
    echo "Publish UI-Toolkit Components End"
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

