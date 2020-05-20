# Execute publish
function executePublish {
    npm pack
    npm publish
    git add package.json
    git config --global user.email "$GIT_USEREMAIL"
    git config --global user.name "$GIT_USERNAME"
    git commit -m "[skip ci] AUTO Bump Snapshot"
    git push --set-upstream origin ${CIRCLE_BRANCH}
}

# Set version
function setVersion {
    if [ -z "$CIRCLE_TAG" ]; then
        # create snapshot version
        npm --no-git-tag-version version prerelease --preid=SNAPSHOT
    else 
        echo "Found tag, setting version to $CIRCLE_TAG"
        npm --no-git-tag-version version ${CIRCLE_TAG}
    fi
}

# Version and publish logic
function publish() {
    echo "Running publish..."
    setVersion;
    executePublish;
    echo "Publish End"
}

# ====> Start
if [ -z "$CIRCLE_PULL_REQUEST" ]; then
    publish
else
    echo "This is a PR skip publish ..."
    exit 0;
fi

