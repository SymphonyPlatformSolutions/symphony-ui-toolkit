#!/bin/bash
set -e
# Execute publish
function executePublish {
    cp -r dist/* .
    rm -rf dist
    yarn npm publish --access public
}

# Version and publish logic
function publish() {
    echo "Running UI-Toolkit Components publish..."
    executePublish;
    postToUniversalWebhook;
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

