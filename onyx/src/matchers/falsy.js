// Falsy matcher; Fails if value is truthy:

module.exports = (value) => {
  if (!value) return true;

  throw new Error(`The value is truthy.\nValue: ${value}`);
}
