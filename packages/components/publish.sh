#!/bin/bash
set -e
# Execute publish
function executePublish {
    cp package.json dist/
    cp README.md dist/
    cd dist
    yarn npm publish --ignore-scripts --access public
    cd ..
}

# Version and publish logic
function publish() {
    echo "Running UI-Toolkit Components publish..."
    executePublish;
    # postToUniversalWebhook;
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

