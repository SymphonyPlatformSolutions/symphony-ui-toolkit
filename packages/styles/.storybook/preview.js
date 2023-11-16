import '!style-loader!css-loader!sass-loader!../stories/stories.scss';
import Events from '@storybook/core-events';

import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

const appContentBgDark = '#1A1C1D';

setTimeout(() => init());

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appContentBg: appContentBgDark,
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
  options: {
    storySort: {
      order: ['Welcome', 'Components', 'Utils', 'Validation'],
    },
  },
  themes: {
    list: [{ name: 'Condensed', class: ['tk-theme-condensed', 'condensed'] }],
  },
};

// This allows us to add a dark class to the body element to be able to render our component in dark mode in sync with Storybook
const init = () => {
  const darkClass = 'dark';
  const condensedClass = 'condensed';
  const channel = addons.getChannel();

  channel.on(DARK_MODE_EVENT_NAME, (isDark) => {
    if (isDark) {
      document.body.classList.add(darkClass);
    } else {
      document.body.classList.remove(darkClass);
    }
  });

  channel.on(Events.GLOBALS_UPDATED, (context) => {
    const isDark = context.globals.dark;
    const isCondensed = context.globals.condensed;
    if (isDark) {
      document.body.classList.add(darkClass);
      document.body.style.background = appContentBgDark;
    }
    if (isCondensed) {
      document.body.classList.add(condensedClass);
    }
  });
};
