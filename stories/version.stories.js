import * as pck from '../package.json';
export default {
  title: 'Version',
};

export const Version = () => `
  <h2>Current version <a class="tk-link" target="_blank" href="https://github.com/SymphonyPlatformSolutions/symphony-bdk-ui-toolkit-styles/releases/tag/v${pck.version}">${pck.version}</a></h2>
  `;
