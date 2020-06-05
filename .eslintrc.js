module.exports = {
  root: true,
  env: {
    jest: true,
    commonjs: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react/jsx-props-no-spreading': ['off'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    indent: ['error', 2]
  }
};
