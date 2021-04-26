#!/bin/bash
set -e
# Execute publish
function executePublish {
    npm pack
    npm publish --access public
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
    echo "Publish End"
}

# ====> Start
if [ -z "$CIRCLE_TAG" ]; then
    echo "No tag, skip publish ..."
    exit 0;
else
    publish
fi

