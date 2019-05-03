/* Onyx unit testing library index.js file */

// Import colors:
const colors = require('colors');

// Import matchers:
const matchers = require('./matchers');

const onyx = {
  SILENT: false
};

// Format vars:
const repeat = (str, n) => Array(n).join(str);
const indent = n => repeat('    ', n);
const indentLines = (str, n) => indent(n) + str.replace(/\n/g,  `\n${indent(n)}`);

// Run every beforeEach callback:
const runEveryBeforeEach = () => {
  beforeEachStack.forEach((level) => level.forEach(cb => cb()));
};

// Logs a string to the console:
const log = str => !onyx.SILENT && console.log(str);

// Test summary counters:
const summary = { successful: 0, failed: 0, disabled: 0 };

// The stack of beforeEach callbacks:
const beforeEachStack = [ [] ];
let indentLevel = 0;

// Group:
const group = (desc, cb) => {
  beforeEachStack.push([]);
  indentLevel++;
  log(`\n${indent(indentLevel)}⇨ ${desc}`.yellow);
  cb();
  indentLevel--;
  beforeEachStack.pop();
};

// Disable group:
const xgroup = (desc, cb) => {
  log(`${indent(indentLevel + 1)}${' DISABLED '.bgWhite.black} ${desc.gray}`);
  summary.disabled++;
}

// Test:
const test = (desc, cb) => {
  try {
    cb();
    log(`${indent(indentLevel + 1)}${' OK '.bgGreen.black} ${desc.green}`);
    summary.successful++;
  } catch(err) {
    log(`${indent(indentLevel + 1)}${' FAIL '.bgRed.black} ${desc.red}`);
    log(err.stack.red);
    summary.failed++;
  }
};

// Disable test:
const xtest = (desc, cb) => {
  log(`${indent(indentLevel + 1)}${' DISABLED '.bgWhite.black} ${desc.gray}`);
  summary.disabled++;
};

// Expect:
const expect = (value) => {
  if (value) return true;

  throw new Error('Assertion failed.');
};

Object.assign(expect, matchers);

// Prints finished test results to the console:
const complete = () => {
  log(`\n.......\n`);
  log('Test summary:\n');
  log(`   Successful: ${summary.successful}`.green);
  log(`   Failed: ${summary.failed}`.red);
  log(`   Disabled: ${summary.disabled}\n\n`.gray);

  if (summary.fail > 0) process.exit(1);
  process.exit(0);
};

// Temp beforeAll function:
const beforeAll = cb => cb();

// Temp beforeEach function:
const beforeEach = cb => {
  beforeEachStack[beforeEachStack.length -1].push(cb);
};

const dsl = { expect, test, xtest, complete, group, xgroup, beforeEach, beforeAll };

module.exports = Object.assign(onyx, dsl);
