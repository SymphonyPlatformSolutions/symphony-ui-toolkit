const fs = require('fs');
const { execSync } = require('child_process');

const DIST_FONTS = 'dist/fonts/';
const SRC_ICONS = 'src/icons/';
const GENERATE_ICON_CMD = `icon-font-generator -s ${SRC_ICONS}svg/*.svg -o ${DIST_FONTS} --csspath ${SRC_ICONS}/generated/tk-icons-definitions.scss --csstp ${SRC_ICONS}tk-icons-template.hbs -p tk-icon -n tk-icons --mono --center --height 128`;

const generateFonts = () => {
  execSync(`mkdir -p dist ${DIST_FONTS}`);
  execSync(GENERATE_ICON_CMD, { stdio: 'inherit' });
};

const generateIcons = () => {
  generateFonts();
  fs.readFile(`${DIST_FONTS}tk-icons.html`, 'utf8', function(err, data) {
    const iconsHtml = data.substring(data.indexOf('<body>') + 6, data.indexOf('</body>'));
    const iconsStorybook =
      "export default { title: 'Components/Icon'}; export const Icon = () => `" + iconsHtml + '`';
    fs.writeFileSync('stories/icons.stories.js', iconsStorybook);
  });
  console.info('Auto-generated icons.stories.js ✅');
};

const blockSvgProp = (property) => {
  fs.readdirSync(`${SRC_ICONS}svg/`).forEach(file => {
    fs.readFile(`${SRC_ICONS}svg/${file}`, 'utf8', (err, svgSrc) => {
      try {
        if(svgSrc.includes(property)) {
          throw `File ${file} uses a forbidden property: ${property}.`;
        }
      }
      catch (e) {
        throw new Error(e);
      }
    });
  });
  }

blockSvgProp(`fill-rule="evenodd"`);
generateIcons();
