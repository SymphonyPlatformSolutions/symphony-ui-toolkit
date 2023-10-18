/**
 * This file is used by both
 * Jest and Storybook.
 */
module.exports = {
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
