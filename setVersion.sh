
# Set version
if [ -z "$CIRCLE_TAG" ]; then
    echo "No tag, skip publish ..."
else
    echo "Found tag, setting version to $CIRCLE_TAG"
    yarn version --no-git-tag-version --new-version ${CIRCLE_TAG//v}
    yarn workspace @symphony-ui/uitoolkit-styles version --no-git-tag-version --new-version ${CIRCLE_TAG//v}
    yarn workspace @symphony-ui/uitoolkit-components version --no-git-tag-version --new-version ${CIRCLE_TAG//v}
    # Update Components with new release of Styles
    yarn workspace @symphony-ui/uitoolkit-components upgrade @symphony-ui/uitoolkit-styles@${CIRCLE_TAG//v}

    git add package.json
    git add **/package.json
    git config --global user.email "$GIT_USEREMAIL"
    git config --global user.name "$GIT_USERNAME"
    git commit -m "[skip ci] AUTO Bump version"
    git push origin HEAD:dryrun # MOCK REPLACE BY master
fi