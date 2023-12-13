const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let maxDepth = 0;

    if (! Array.isArray(arr)) {
      return 0;
    }

    for (let item of arr) {
      if(Array.isArray(item)) {
        const depth = this.calculateDepth(item)
        if(depth > maxDepth) {
          maxDepth = depth;
        }
      }
    }

    return 1 + maxDepth;

  }
}

module.exports = {
  DepthCalculator
};
