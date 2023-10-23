import '!style-loader!css-loader!sass-loader!../stories/stories.scss';
import addons from '@storybook/addons';
import { themes } from '@storybook/theming';
import Events from '@storybook/core-events';

const appContentBgDark = '#1A1C1D';

setTimeout(() => init());
export const parameters = {
  options: {
    storySort: {
      order: ['Welcome', 'Components', 'Utils', 'Validation'],
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appContentBg: appContentBgDark,
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
  themes: {
    list: [{ name: 'Condensed', class: ['tk-theme-condensed', 'condensed'] }],
  },
};
// this allows us to add a dark class to body element to be able to render our component in dark mode  in sync with storybook's
const init = () => {
  const darkClass = 'dark';
  const condensedClass = 'condensed';
  const channel = addons.getChannel();
  channel.on('DARK_MODE', (isDark) => {
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
