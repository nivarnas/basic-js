const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log(options)
  let basicOptions = {
    separator: '+',
    addition: '',
    // separator: '',
    additionSeparator: '|',
    additionRepeatTimes: 1,
    repeatTimes: 1
  }

  for (key in basicOptions) {
    // options[key] = options[key].toString();
    if (! options[key] && (options[key] !== false) && (options[key] !== null)) {
      options[key] = basicOptions[key];
    }
    // if (options[key])

    if (options[key] === null) {
      options[key] = 'null'
    } else {
      // options[key] = options[key].toString();
      options[key] += '';
    }
  }
  console.log('             ' + str)
  // console.log(options);

  // if (! options.separator) {
  //   options.separator = basicOptions.separator
  // }

  // if (! options.additionSeparator) {
  //   options.additionSeparator = basicOptions.additionSeparator;    
  // }

  // for (key in options) {
  //   options[key] = options[key].toString();
  // }

  let result = ''

  // result = (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition + options.separator).repeat(options.repeatTimes - 1) +
  // (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition)
  
  let additions = ''

  if (options.additionRepeatTimes) {
    additions = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition
  }

  // console.log(additions)

  result = (str + additions + options.separator).repeat(options.repeatTimes - 1) + (str + additions)

  return result

  // console.log(options);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
