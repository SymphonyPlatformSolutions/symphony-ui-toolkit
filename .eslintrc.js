module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    commonjs: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/jsx-props-no-spreading': ['off'],
    quotes: ['error', 'single', 'avoid-escape'],
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    indent: ['error', 2],
    '@typescript-eslint/no-var-requires': 0,
    'no-control-regex': 0,
  },
};
