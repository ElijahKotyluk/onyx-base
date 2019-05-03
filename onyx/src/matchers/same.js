// Same matcher:

module.exports = (a, b) => {
  if (a === b) return true;

  throw new Error(`The values are not the same.\n\nRecieved: ${a}\nExpected: ${b}`);
}
