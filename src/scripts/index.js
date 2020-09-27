
const fs = require('fs');
const { execSync } = require('child_process');

const DIST_FONTS = 'dist/fonts/';
const SRC_ICONS ='src/icons/';

const generateFonts = () => {
  execSync(`mkdir -p dist ${DIST_FONTS}`);
  execSync(`icon-font-generator ${SRC_ICONS}svg/*.svg -o ${DIST_FONTS} --csspath ${DIST_FONTS}tk-icons-definitions.scss --csstp ${SRC_ICONS}tk-icons-template.hbs -p tk-icon -n tk-icons`, {stdio: 'inherit'});
} 

const generateIcons = () => {
  generateFonts();
  fs.readFile(`${DIST_FONTS}tk-icons.html`,'utf8',function (err,data) {
    const iconsHtml = data.substring(data.indexOf('<body>')+6, data.indexOf('</body>'));
    const iconsStorybook = "export default { title: 'Icons'}; export const Icon = () => `"+iconsHtml+"`";
    fs.writeFileSync('stories/icons.stories.js', iconsStorybook);
  });
  console.info('Auto-generated icons.stories.js ✅');    
}

if (process.argv.includes('icons')) {
  generateIcons();
}
