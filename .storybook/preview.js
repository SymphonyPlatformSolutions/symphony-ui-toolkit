import * as React from 'react';
import addons from '@storybook/addons';
import { addParameters, forceReRender } from '@storybook/react';
import { themes } from '@storybook/theming';

let globalDarkMode = undefined;

setTimeout(() => init());

addParameters({
  viewMode: 'docs',
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appContentBg: '#1A1C1D' },
  }
});
// this allows us to add a dark class to body element to be able to render our component in dark mode  in sync with storybook's
const init = () => {
  const darkClass = 'dark';
  const channel = addons.getChannel();
  channel.on('DARK_MODE', (isDark) => {
    if (isDark !== globalDarkMode) {
      if (isDark) {
        document.body.classList.add(darkClass);
        addParameters({
          docs: {
            theme: themes.dark,
          },
        });
      } else {
        document.body.classList.remove(darkClass);
        addParameters({
          docs: {
            theme: themes.light,
          },
        });
      }
      globalDarkMode = isDark;
      forceReRender();
    }
  });
};

export const decorators = [
  (Story) => (
    <div className="tk-text-color tk-m-4">
      <Story />
    </div>
  ),
];
