// number utils test module:

const numberUtils = {};

numberUtils.isPrime = (from) => {
  for(let i = 0; i < from; i++) {
    if (from % i === 0) return false;
  }
  return from > 1;
};
numberUtils.createRange = (from, to) => {
  const range = [];
  for (let i = from; i <= to; i++) {
    range.push(i);
  }
  return range;
};

module.exports = numberUtils;
