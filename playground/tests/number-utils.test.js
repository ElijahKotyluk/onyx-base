// number-util tests:

const { expect, test, xtest, group } = require('onyx');
const numberUtils = require('../src/number-utils');

// Group: isPrime method
// Test: True for prime numbers
group('numberUtils', () => {
  group('method: isPrime()', () => {
    xtest('Returns true for prime numbers', () => {
      expect(numberUtils.isPrime(2));
      expect(numberUtils.isPrime(3));
      expect(numberUtils.isPrime(5));
      expect(numberUtils.isPrime(7));
      expect(numberUtils.isPrime(23));
    });

    // Test: fail
    test('This test should fail', () => {
      expect((10 * 10) === (10 ** 10));
    });

    // Test: False for non-prime numbers
    test('Returns false for non-prime numbers', () => {
      expect(numberUtils.isPrime(4));
      expect(numberUtils.isPrime(8));
      expect(numberUtils.isPrime(10));
      expect(numberUtils.isPrime(20));
    });
  });
});
