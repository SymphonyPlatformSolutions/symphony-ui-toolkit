const fs = require('fs');
const { execSync } = require('child_process');
const { generateFonts, FontAssetType, OtherAssetType } = require('fantasticon');

const DIST_FONTS = 'dist/fonts/';
const SRC_ICONS = 'src/icons/';
const GENERATED_DIR = `${SRC_ICONS}/generated/`;
const STORIES_DIR = `stories/`

const createDirectories = () => {
  execSync(`rm -rf ${DIST_FONTS}`);
  execSync(`rm -rf ${GENERATED_DIR}`);
  execSync(`mkdir -p ${DIST_FONTS}`);
  execSync(`mkdir -p ${GENERATED_DIR}`);
}

const getCodePoints = () => {
  const rawdata = fs.readFileSync(`${SRC_ICONS}tk-icons.codepoints.json`);
  return JSON.parse(rawdata);
}

const generateTKFonts = async () => {
  createDirectories();

  const codepoints = getCodePoints();

  await generateFonts({
    name: 'tk-icons',
    prefix: 'tk-icon',
    inputDir: `${SRC_ICONS}svg`,
    outputDir: DIST_FONTS,
    fontTypes: [FontAssetType.EOT, FontAssetType.SVG, FontAssetType.TTF, FontAssetType.WOFF, FontAssetType.WOFF2],
    assetTypes: [OtherAssetType.HTML, OtherAssetType.JSON, OtherAssetType.SCSS],
    templates:{
      scss: `${SRC_ICONS}templates/tk-icons.scss.hbs`,
      html: `${SRC_ICONS}templates/tk-icons.stories.js.hbs`,
      json: `${SRC_ICONS}templates/tk-icons.codepoints.json.hbs`,
    },
    pathOptions: {
      scss: `${GENERATED_DIR}tk-icons-definitions.scss`,
      html: `${STORIES_DIR}icons.stories.js`,             // Generate our Storybook story
      json: `${SRC_ICONS}tk-icons.codepoints.json`,       // Keep the generated CodePoints
    },
    getIconId: ({basename}) => (basename), // To fix conflict name with "more-.svg" and "more.svg"
    codepoints, 
    fontHeight: 128,
  });
}

const generateIcons = async () => {
  await generateTKFonts();
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
