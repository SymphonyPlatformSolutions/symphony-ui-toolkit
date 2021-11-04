const path = require('path');

module.exports = {
    // Pixelmatch options
    diffOptions: { threshold: 0.1 },
    // How many times test should be retried before to consider it as failed
    maxRetries: 2,
    // Where original images are stored
    screenDir: path.join(__dirname, 'images'),
    // Report directory that contains data from previous runs
    reportDir: path.join(__dirname, 'report'),
};
