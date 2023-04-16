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
  // let container = {};
  // let result =

  // let retult = names.map((name) => {
  //   if (!container[names[k]]) {
  //     container[names[k]] = 0;
  //     result.push(names[k]);
  //     console.log(container[names[k]]);
  //   } else {
  //     container[names[k]] = container[names[k]] + 1;
  //     result.push(`${names[k]}` + `(${container.names[k]})`);
  //     // console.debug(container[names[k]]);
  //   }
  // }

  // return result;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// renameFiles(["file", "file", "image", "file(1)", "file"])
module.exports = {
  renameFiles
};
