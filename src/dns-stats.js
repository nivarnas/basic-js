const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let doms = {};

  for (let i = 0; i < domains.length; i++) {
    let adress = domains[i].split('.');

    let modifiedAdress = adress.reverse()
    console.log(`i = ${i}: ${modifiedAdress}`);
    let count = '';
    for (let j = 0; j <modifiedAdress.length; j++) {
      count += '.' + modifiedAdress[j];
      if (!(typeof doms[count] !== 'undefined')) {
        doms[count] = 1;
      } else {
        doms[count] += 1;
      }
    }

    
    // while ()
      
    // }
  }
  return doms;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
