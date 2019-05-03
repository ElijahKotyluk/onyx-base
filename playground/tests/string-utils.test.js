// string-util tests:

const { expect, test, group } = require('onyx');
const stringUtils = require('../src/string-utils');

// Group: capitalizeFirstLetter method
group('stringUtils', () => {

  // Test: Capitalize first letter of string
  group('method: capitalizeFirstLetter()', () => {
    test('Capitalizes first letter of string', () => {
      expect(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
    });

    // Test: Don't change the case of the remaining characters
    test('Capitalizes first letter of string', () => {
      expect(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');
    });
  })

  // Group: isEmpty method
  group('method: isEmpty()', () => {
    // Test: True when passing empty string
    test('Returns true when passing an empty string', () => {
      expect(stringUtils.isEmpty(''));
    });

    // Test: True when passing string with empty spaces
    test('Returns true when passing a string containing only spaces', () => {
      expect(stringUtils.isEmpty('   '));
    });

    // Test: False when passing non-empty string
    test('Returns false when passing a non-empty string', () => {
      expect(stringUtils.isEmpty('hello'));
    });
  });

  // Group: startsWith method
  group('method: startsWith()', () => {
    // Test: True when starts with passed string
    test('Returns true when starts with passed string', () => {
      expect(stringUtils.startsWith('I don\'t know...', 'I'));
    });

    // Test: False when it contains passed string, but doesn't start with it
    test('Returns false when it contains the passed string, but doesn\'t start with it', () => {
      expect(stringUtils.startsWith('I don\'t know...'), 'know');
    });

    // Test: False when it doesn't contain passed string
    test('Returns false when it doesn\'t contain the passed string', () => {
      expect(stringUtils.startsWith('I don\'t know...'), 'hello');
    });
  });
});
