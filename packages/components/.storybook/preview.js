import * as React from 'react';
import addons from '@storybook/addons';
import { addParameters, forceReRender } from '@storybook/react';
import { themes } from '@storybook/theming';

import 'focus-visible';

let globalDarkMode = undefined;

setTimeout(() => init());

addParameters({
  options: {
    storySort: {
      order: [
        'Welcome',
        ['Readme', 'Getting Started', 'Contributing guide', 'Sandbox'],
        'Components',
        'Utils',
      ],
    },
  },
  viewMode: 'docs',
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appContentBg: '#1A1C1D',
      brandImage:
        'https://theme.zdassets.com/theme_assets/643007/9ede1116ae6efc6e4fb12ba49e6315c803807d56.png',
      brandTitle: 'UIToolkit Components',
    },
    light: {
      ...themes.light,
      appBg: 'white',
      brandImage: 'https://symphony.com/wp-content/uploads/2019/06/logo.png',
      brandTitle: 'UIToolkit Components',
    },
  },
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
