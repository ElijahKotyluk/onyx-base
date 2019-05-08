const { expect, test } = require('onyx');

test('playing with our new matchers', () => {
  // The original expect function still works
  expect(123 === 123);
  expect.truthy('abc');
  expect.falsy(null);
  const a = { whatever: 777 };
  const b = a;
  expect.exact(a, b);
  expect.identical(undefined, null);
  const c = { whatever: { foo: { bar: 'baz' } } };
  const d = Object.assign({}, c);
  expect.deeplyEqual(c, d);
  function boom() { throw new Error('Some error...'); }
  expect.toThrow(boom);
  expect.toThrow(boom, 'Some error...');
});
