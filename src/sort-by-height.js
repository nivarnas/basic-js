const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = [];
  arr.forEach(elem => {
    if (elem !== -1) sortArr.push(elem)
  })
  sortArr.sort((a, b) => b - a);
  const result = [];
  for (elem in arr) {
    result.push(elem === -1 ? -1 : sortArr.shift())
  }
  return result
}

module.exports = {
  sortByHeight
};
