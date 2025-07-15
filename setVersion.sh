
# Set version
if [ -z "$CIRCLE_TAG" ]; then
    echo "No tag, skip publish ..."
else
    echo "Found tag, setting version to $CIRCLE_TAG"
    
    yarn version ${CIRCLE_TAG//v}
    yarn workspace @symphony-ui/uitoolkit-styles version ${CIRCLE_TAG//v}
    yarn workspace @symphony-ui/uitoolkit-components version ${CIRCLE_TAG//v}

    # Update Components with new release of Styles
    yarn workspace @symphony-ui/uitoolkit-components upgrade @symphony-ui/uitoolkit-styles@${CIRCLE_TAG//v}

    yarn install
    git add yarn.lock
    git add package.json
    git add **/package.json
    git config --global user.email "$GIT_USEREMAIL"
    git config --global user.name "$GIT_USERNAME"
    git commit -m "[skip ci] AUTO Bump version"
    git push origin HEAD:axeleriksson/trying-to-get-yarn-link-working
fi