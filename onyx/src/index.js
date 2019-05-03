/* Onyx unit testing library index.js file */

const colors = require('colors');

// Format vars:
const repeat = (str, n) => Array(n).join(str);
const indent = n => repeat('    ', n);
const indentLines = (str, n) => indent(n) + str.replace(/\n/g,  `\n${indent(n)}`);

// Test summary:
const summary = { successful: 0, failed: 0, disabled: 0 };

let indentLevel = 0;

// Group:
const group = (desc, cb) => {
  indentLevel++;
  console.log(`\n${indent(indentLevel)}⇨ ${desc}`.yellow);
  cb();
  indentLevel--;
};

// Test:
const test = (desc, cb) => {
  try {
    cb();
    console.log(`${indent(indentLevel + 1)}${' OK '.bgGreen.black} ${desc.green}`);
    summary.successful++;
  } catch(err) {
    console.log(`${indent(indentLevel + 1)}${' FAIL '.bgRed.black} ${desc.red}`);
    console.log(err.stack.red);
    summary.failed++;
  }
};

// Disable test:
const xtest = (desc, cb) => {
  console.log(`${indent(indentLevel + 1)}${' DISABLED '.bgWhite.black} ${desc.gray}`);
  summary.disabled++;
};

// Expect:
const expect = (value) => {
  if (value) return true;

  throw new Error('Assertion failed.');
};

// Prints finished test results to the console:
const complete = () => {
  console.log(`\n.......\n`);
  console.log('Test summary:\n');
  console.log(`   Successful: ${summary.successful}`.green);
  console.log(`   Failed: ${summary.failed}`.red);
  console.log(`   Disabled: ${summary.disabled}\n\n`.gray);

  if (summary.fail > 0) process.exit(1);
  process.exit(0);
};

module.exports = { expect, test, xtest, complete, group };
