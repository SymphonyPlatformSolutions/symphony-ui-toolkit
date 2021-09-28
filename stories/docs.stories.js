import start from '../docs/getting-started.md';
import theming from '../docs/theming-guide.md';
import contributing from '../docs/contributing.md';
import sandbox from '../docs/sandbox.md';

export default {
  title: 'Welcome/Docs',
  parameters: {
    creevey: {
      skip: [
        { in: 'chrome', reason: 'Not necessary validate Welcome' },
      ],
    },
  },
};

export const GettingStarted = () => start;
export const ThemingGuide = () => theming;
export const Contributing = () => contributing;
export const Sandbox = () => sandbox;
