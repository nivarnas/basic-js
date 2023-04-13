const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let str2 = [];

  for (let i = 0; i < s2.length; i++) {
    str2.push(s2[i]);
    // console.log(str2);
  }

  for (let i = 0; i < s1.length; i++) {
    // console.log(s1[i]);

    // if (s1.indexOf(s1[i], i + 1) === -1) {
      if (str2.indexOf(s1[i]) !== -1) {
        count += 1;
        str2.splice(str2.indexOf(s1[i]), 1 );
        // console.log(str2);
      } 
    
    // }
  }

  return count
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
