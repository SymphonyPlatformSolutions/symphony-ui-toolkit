#!/bin/bash
set -e
# Execute publish
function executePublish {
    yarn pack
    yarn publish --access public
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
    echo "Running UI-Toolkit Styles publish..."
#    setVersion;
    executePublish;
#    postToUniversalWebhook; # Temporary disable notification
    echo "Publish UI-Toolkit Styles End"
}

function postToUniversalWebhook() {
    curl --location --request POST "$WEBHOOK_CONTRIBUTORS_URL" -F 'message=@webhook/publish-styles.xml' -F 'data={"version": { "styles": "'"$CIRCLE_TAG"'" }}'
}

# ====> Start
if [ -z "$CIRCLE_TAG" ]; then
    echo "No tag, skip publish ..."
    exit 0;
else
    publish
fi

