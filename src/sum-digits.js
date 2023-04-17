const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// console.log(getSumOfDigits(91))

function getSumOfDigits(n) {
  let sum = 0;
  const stringN = n + '';
  
  for (let i = 0; i < stringN.length; i++) {
    sum += Number(stringN[i]);
  }

  if (sum > 9){
    return getSumOfDigits (sum);
  } else {
    return sum;
  }


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  getSumOfDigits
};
