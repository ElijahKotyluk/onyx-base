/* Playground tests entrypoint */

// Import complete function from onyx:
const { complete } = require('onyx');

require('./string-utils.test');
require('./number-utils.test')

// Print test results:
complete();
