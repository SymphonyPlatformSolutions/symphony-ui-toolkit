import '!style-loader!css-loader!sass-loader!../stories/stories.scss';

import addons from '@storybook/addons';

setTimeout(() => init(), 1);

// this allows us to add a dark class to body element to be able to render our component in dark mode  in sync with storybook's
const init = () => {
  const darkClass = 'tk-dark';
  const channel = addons.getChannel();
  channel.on('DARK_MODE', (isDark) => {
    if (isDark) {
      document.body.classList.add(darkClass);
    } else {
      document.body.classList.remove(darkClass);
    }
  });
};
