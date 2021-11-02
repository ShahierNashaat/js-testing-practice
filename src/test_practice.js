const stringLength = (str) => {
  if (str.length >= 1 && str.length < 10) {
    return str.length;
  }
  throw new Error('String length must be at least 1 and not longer than 10');
};

const reverseString = (str) => {
  let reversdString = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversdString += str[i];
  }

  return reversdString;
};

const capitalize = (str) => {
  let capitalizedStr = '';

  if (str.length === 0) {
    return capitalizedStr;
  }

  capitalizedStr += str[0].toUpperCase();
  for (let i = 1; i < str.length; i += 1) {
    capitalizedStr += str[i];
  }

  return capitalizedStr;
};

module.exports = { stringLength, reverseString, capitalize };