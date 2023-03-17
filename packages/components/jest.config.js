// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  verbose: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: ['<rootDir>/src/components/icons/.*'],

  coverageThreshold: {
    global: {
      // temporarily lowering branch coverage
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // A list of paths to modules that run some code to configure or set up
  // the testing framework before each test
  setupFilesAfterEnv: ['jest-extended', '<rootDir>spec/init/setupTests.js'],

  transformIgnorePatterns: [
    'node_modules/(?!@symphony-ui/uitoolkit-styles/dist/fonts/tk-icons.ts)',
  ],
};
