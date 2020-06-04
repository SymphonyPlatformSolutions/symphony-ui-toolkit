import '!style-loader!css-loader!sass-loader!../stories/stories.scss';
import './styles.css';
import { addParameters } from '@storybook/html';
import addons from '@storybook/addons';
import { themes } from '@storybook/theming';

setTimeout(() => init());
addParameters({
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appContentBg: '#1A1C1D' },
  },
});
// this allows us to add a dark class to body element to be able to render our component in dark mode  in sync with storybook's
const init = () => {
  const darkClass = 'dark';
  const channel = addons.getChannel();
  channel.on('DARK_MODE', (isDark) => {
    if (isDark) {
      document.body.classList.add(darkClass);
    } else {
      document.body.classList.remove(darkClass);
    }
  });
};
