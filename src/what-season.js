const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!Date.parse(date)){
    throw Error('Invalid date!');
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!')
  }

  date = new Date(date);
  let mounth = date.getMonth();

  if ((mounth === 11) || (mounth === 0) || (mounth === 1)) {
    return 'winter'
  } else if ((mounth === 2) || (mounth === 3) || (mounth === 4)) {
    return 'spring';
  } else if ((mounth === 5) || (mounth === 6) || (mounth === 7)) {
    return 'summer';
  } else {
    return 'autumn'
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
