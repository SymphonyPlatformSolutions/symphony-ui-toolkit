
var fs = require('fs');
const { execSync } = require('child_process');


const ICONS_SCSS = `_tk-icons-embedded.scss`;
const OUTPUT_FONTS_FOLDER = 'src/assets/fonts/';
const ICONS_FOLDER = 'src/icons/';
const ICONS_HTML = `${OUTPUT_FONTS_FOLDER}tk-icons.html`;
const INPUT_SVG_SOURCES = `${ICONS_FOLDER}svg/*.svg`;
const OUTPUT_SCSS = `${ICONS_FOLDER}${ICONS_SCSS}`;
const TEMP_SCSS = `dist/fonts/${ICONS_SCSS}`;

const build = () => {
  execSync(`mkdir -p dist dist/fonts`);
  fs.copyFileSync(OUTPUT_SCSS, TEMP_SCSS);
  execSync(`icon-font-generator ${INPUT_SVG_SOURCES} -o dist/fonts/ --csspath ${OUTPUT_SCSS} -p tk-icon -n tk-icons -j false --html false`);
  execSync(`yarn sass --load-path=node_modules --no-source-map --style compressed uitoolkit.scss:dist/css/uitoolkit.css uitoolkit-tempo-support.scss:dist/css/uitoolkit-tempo-support.css`);
  fs.copyFileSync(TEMP_SCSS, OUTPUT_SCSS);
  execSync(`rm -rf ${TEMP_SCSS}`);
} 

const iconsStorybook = () => {
  execSync(`icon-font-generator ${INPUT_SVG_SOURCES} -o ${OUTPUT_FONTS_FOLDER} --csspath ${OUTPUT_SCSS} -p tk-icon -n tk-icons -j false --csstp ${OUTPUT_FONTS_FOLDER}tk-icons.hbs`,  {stdio: 'inherit'});
  fs.readFileSync(ICONS_HTML,'utf8', (err, data) =>  {
    const iconsHtml = data.substring(data.indexOf('<body>')+6, data.indexOf('</body>'));
    const iconsStoryBook = "export default { title: 'Icons'}; export const Icon = () => `"+iconsHtml+"`"
    fs.writeFileSync('stories/icons.stories.js', iconsStoryBook);
  });
  execSync(`rm -rf ${ICONS_HTML}`);
  console.info('Auto-generated icons.stories.js ✅');    
}

if (process.argv.includes('build')) { 
  build();
}
if (process.argv.includes('iconsStorybook')) {
  iconsStorybook();
}


