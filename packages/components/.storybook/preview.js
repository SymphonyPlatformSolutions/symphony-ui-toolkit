import * as React from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

let globalDarkMode = undefined;

setTimeout(() => init());

const sbAddonThemes3 = JSON.parse(window.localStorage.getItem('sb-addon-themes-3'))

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appContentBg: '#1A1C1D',
      brandImage:
        'https://theme.zdassets.com/theme_assets/643007/9ede1116ae6efc6e4fb12ba49e6315c803807d56.png',
      brandTitle: 'UIToolkit Components',
    },
    // Override the default light theme
    light: {
      ...themes.light,
      appBg: 'white',
      brandImage: 'https://symphony.com/wp-content/uploads/2019/06/logo.png',
      brandTitle: 'UIToolkit Components',
    },
  },
  docs: {
    theme: sbAddonThemes3.current === 'light' ? themes.light : themes.dark
  },
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
  themes: {
    list: [{ name: 'Condensed', class: ['tk-theme-condensed', 'condensed'] }],
  },
  viewMode: 'docs',
};

// This allows us to add a dark class to the body element to be able to render our component in dark mode in sync with Storybook
const init = () => {
  const darkClass = 'dark';
  const channel = addons.getChannel();

  channel.on(DARK_MODE_EVENT_NAME, (isDark) => {
    if (isDark !== globalDarkMode) {
      if (isDark) {
        document.body.classList.add(darkClass);
      } else {
        document.body.classList.remove(darkClass);
      }
      globalDarkMode = isDark;
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
