/* Playground tests entrypoint */

// Import complete function from onyx:
const { complete } = require('onyx');

//require('./string-utils.test');
//require('./number-utils.test');
require('./onyx-matchers.test');
//require('./onyx-beforeAll.test');

// Print test results:
complete();
