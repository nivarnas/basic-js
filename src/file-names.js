const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let container = {};
  let result = [];

  for (let i = 0; i < names.length; i++) {
    let name = names[i] + '';
    // console.log(container);
    if ((container[name] >= 0)) {
      container[name] += 1;
      container[`${name}` + `(${container[name]})`] = 0;
      console.log(container);
      result.push(`${name}` + `(${container[name]})`);
      // container[name] = 0;
      // result.push(name);
      // console.log(container[name]);
    } else {
      container[name] = 0;
      result.push(name);
      // console.debug(container[names[k]]);
    }
  }

  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// renameFiles(["file", "file", "image", "file(1)", "file"])
module.exports = {
  renameFiles
};
