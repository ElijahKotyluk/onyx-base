const { expect, test, group, beforeAll } = require('onyx');

let a;
beforeAll(() => {
  a = { something: 'example' };
});
group('playing with the beforeAll function', () => {
  let b;
  beforeAll(() => {
    b = { something: 'example' };
  });
  test('some test', () => {
    expect.deeplyEqual(a, b);
  });
  test('another test', () => {
    expect.identical(11, 11);
  });
});
