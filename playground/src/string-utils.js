// string utils test module:

const stringUtils = {};

stringUtils.capitalizeFirstLetter = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};

stringUtils.isEmpty = (str) => {
  return str.trim().length === 0;
};

stringUtils.startsWith = (str, sub) => {
  return str.indexOf(sub) === 0;
};

module.exports = stringUtils;
