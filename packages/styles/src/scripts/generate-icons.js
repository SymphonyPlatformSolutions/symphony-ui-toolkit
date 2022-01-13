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

const getAliases = () => (JSON.parse(fs.readFileSync(`${SRC_ICONS}tk-icons.aliases.json`)));

const getCodePoints = () => {
  const codepoints = JSON.parse(fs.readFileSync(`${SRC_ICONS}tk-icons.codepoints.json`));
  const aliases = getAliases();

  for (const alias in aliases) {
    const target = aliases[alias];
    if(codepoints[target]){
      console.log(`Alias: "${alias}" -> "${target}" (codepoint ${codepoints[target]})`);
      codepoints[alias] = codepoints[target];
    }
    else {
      try {
        if (!fs.existsSync(`${SRC_ICONS}]${target}.svg`)) {
          console.error(`Alias: "${alias}" -> "${target}" (Missing "${target}.svg" file)`);
        }
        else {
          console.error(`Alias: "${alias}" -> "${target}" (Missing target codepoint)`);
        }
      } catch(err) {
        console.error(err)
      }
    }
  }
  return codepoints;
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
    assetTypes: [OtherAssetType.HTML, OtherAssetType.JSON, OtherAssetType.SCSS, OtherAssetType.TS],
    templates:{
      scss: `${SRC_ICONS}templates/tk-icons.scss.hbs`,
      html: `${SRC_ICONS}templates/tk-icons.stories.js.hbs`,
    },
    pathOptions: {
      scss: `${GENERATED_DIR}tk-icons-definitions.scss`,
      html: `${STORIES_DIR}icons.stories.js`,               // Generate our Storybook story
      json: `${SRC_ICONS}tk-icons.codepoints.json`,         // Keep the generated CodePoints
      ts:`${DIST_FONTS}tk-icons.ts`,                         // Generate Icon types
    },
    getIconId: ({basename}) => (basename), // To fix conflict name with "more-.svg" and "more.svg"
    codepoints,
    fontHeight: 128,
  });
}

const generateIcons = async () => {
  blockSvgProp(`fill-rule="evenodd"`);
  await generateTKFonts();
  generateIconTypes();
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

const generateIconTypes = () => {
  let aliases = '\n';
  for (const alias in getAliases()) {
    aliases+=`  | "${alias}"\n`;
  }
  
  fs.readFile(`${DIST_FONTS}tk-icons.ts`, 'utf8', (err, src) => {
    const tkIconsId = src.toString();
    const tkIcons = `export type TkIcon ${tkIconsId.substring(tkIconsId.indexOf("="), tkIconsId.indexOf(";"))}${aliases};`;
    fs.writeFileSync(`${DIST_FONTS}tk-icons.ts`, tkIcons);
  });
}

generateIcons();
