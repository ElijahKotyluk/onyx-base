// Deeply identical matcher:

// Import node assert module;
const assert = require('assert');

// TODO Test speed:
module.exports = (a, b) => {
  if (assert.deepEqual(a, b)) return true;

  throw new Error(`The values are not deeply identical.\n\nRecieved:
    ${JSON.stringify(a, null, 4)}\nExpected: ${JSON.stringify(b, null, 4)}`);
};

/*
Vanilla js deep identical matcher:
const deepEqual = (a, b) => {

  // Check if objects are the same:
  if (a === b) {
    return true;
  }

  // If both objects are null; if the number of keys for both objects are not equal; return false;
  else if ((typeOf a == 'object' && a != null) && (typeof b == 'object' && b != null)) {
    if (Object.keys(a).length != Object.keys(b).length) return false;


    // .forEach?
    a.forEach((prop) => {
      if(b.hasOwnProperty(prop)) {
        if(! deepEqual(a[prop], b[prop])) return false;
      }
    });

    // for loop?
    for(let prop in a) {
      if (b.hasOwnProperty(prop)) {
        if(! deepEqual(x[prop], b[prop])) return false;
      }

      else return false;
    }

    return true;
  }
  else return false;
}
*/
