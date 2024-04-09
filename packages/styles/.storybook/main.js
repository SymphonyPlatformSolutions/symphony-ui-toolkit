import { dirname, join } from 'path';
const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    getAbsolutePath('creevey'),
    getAbsolutePath('storybook-addon-themes'),
    getAbsolutePath('storybook-dark-mode'),
  ],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.(woff|woff2|eot|ttf|svg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
        include: path.resolve(__dirname, '../dist/*'),
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

    return config;
  },

  framework: {
    name: getAbsolutePath('@storybook/html-webpack5'),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
