// Truthy matcher; Fails if value is falsy:

module.exports = (value) => {
  if (value) return true;

  throw new Error(`The value is falsy.\nValue: ${value}`);
}
