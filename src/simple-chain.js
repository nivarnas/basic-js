const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  addLink(value) {
    if ( typeof value !== 'undefined'){
      this.array.push(`( ${value} )`);
    } else {
      this.array.push(`(  )`);
    }

    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  removeLink(position) {
    if (typeof position !== 'number') {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    } else if (position < 1 || position > this.array.length) {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    } 


    this.array.splice(position - 1, 1);
    

    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.array.reverse();

    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.array.join(`~~`);

    this.array = [];

    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
