var fs = require('fs');
const { execSync } = require('child_process');
const TK_ICONS_HTML = 'src/assets/fonts/tk-icons.html';
const ICONS_STORIES_JS = 'stories/icons.stories.js';

fs.readFile(TK_ICONS_HTML,'utf8',function (err,data) {
  if (err) {
    return console.log(err);
  }
  var iconsHtml = data.substring(data.indexOf('<body>')+6, data.indexOf('</body>'));
  var iconsStoryBook = "export default { title: 'Icons'}; export const Icon = () => `"+iconsHtml+"`"
  fs.writeFileSync(ICONS_STORIES_JS, iconsStoryBook);
  console.info('Updated icons.stories.js');
  execSync(`rm -rf ${TK_ICONS_HTML}`);
});