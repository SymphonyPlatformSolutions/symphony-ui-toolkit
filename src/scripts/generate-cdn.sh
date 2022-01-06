echo "Generating CDN dist..."
PATH=${CIRCLE_TAG:=master}
echo "\$ICONS_FONTS_PATH: 'https://cdn.symphony.com/resources/ui-toolkit/$CIRCLE_TAG/fonts';" > uitoolkit-cdn.generated.scss
echo "@import './uitoolkit.scss';" >> uitoolkit-cdn.generated.scss
echo "Done with CDN to 'https://cdn.symphony.com/resources/ui-toolkit/$CIRCLE_TAG'"
