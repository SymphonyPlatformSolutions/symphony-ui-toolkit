import { dirname, join } from 'path';

module.exports = {
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-addon-mdx-embed'),
    getAbsolutePath('storybook-dark-mode'),
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('storybook-addon-themes'),
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
          },
        ],
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
