const path = require('path');

module.exports = {
    // Specify custom Selenium Grid url (see usage below)
    // In most cases you don't need this option
    gridUrl: 'http://localhost:4444/wd/hub',
    storybookUrl: 'http://localhost:6006',
    // Pixelmatch options
    diffOptions: { threshold: 0.1 },
    // How many times test should be retried before to consider it as failed
    maxRetries: 4,
    // Where original images are stored
    screenDir: path.join(__dirname, 'images'),
    // Report directory that contains data from previous runs
    reportDir: path.join(__dirname, 'report'),
    browsers: {
      chrome: {
        browserName: 'chrome',
        // Define initial viewport size
        viewport: { width: 1024, height: 720 },
        // Increase parallel sessions
        limit: 2,
      },
    },
};
