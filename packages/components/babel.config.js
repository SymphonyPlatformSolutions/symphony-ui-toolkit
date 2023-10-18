/**
 * babel.config.js is needed for
 * running jest and does not affect
 * the outputted code.
 */
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
