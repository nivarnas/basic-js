const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const stringN = n.toString();

  for (let i = 0; i < stringN.length; i++) {
    if (max < Number(stringN.slice(0, i) + stringN.slice(i + 1, stringN.length))) {
      max = Number(stringN.slice(0, i) + stringN.slice(i + 1, stringN.length));
    }
  }


  return max
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
