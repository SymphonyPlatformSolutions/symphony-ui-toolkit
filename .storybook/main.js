module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-dark-mode/register',
    '@storybook/addon-knobs/register', // Keep until we migrate all to addon-controls
    '@storybook/addon-controls',
    '@storybook/preset-scss',
  ],
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
