/**
 * This file is used by both
 * Jest and Storybook.
 */
module.exports = {
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
