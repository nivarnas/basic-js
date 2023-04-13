const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 0;

  for (i = 0; i < str.length; i++) {
    
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      if (count === 0) {
        result += str[i]
      } else {
        result += `${count + 1}` + str[i];
        count = 0;
      }
    }
  }

  return result
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
