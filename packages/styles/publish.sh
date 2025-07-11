#!/bin/bash
set -e
# Execute publish
function executePublish {
    yarn workspace @symphony-ui/uitoolkit-styles pack
    yarn workspace @symphony-ui/uitoolkit-styles npm publish --access public
}

# Version and publish logic
function publish() {
    echo "Running UI-Toolkit Styles publish..."
    executePublish;
    # postToUniversalWebhook;
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

