const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if ( message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    return this.process (message, key, 'encrypt')
  }

  decrypt(message, key) {
    if ( message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    return this.process(message, key, 'decrypt')
  }

  process(input, key, method) {
    let result = '';
    let j = 0;

    for (let i = 0; i < input.length; i++) {
      if (this.alphabet.includes(input[i].toUpperCase())) {
        const inputIndex = this.alphabet.indexOf(input[i].toUpperCase());
        const keyIndex = this.alphabet.indexOf(key[j % key.length].toUpperCase());
        
        if (method === 'encrypt') {
          result += this.alphabet[(inputIndex + keyIndex) % 26];
        } else if (method === 'decrypt') {
          result += this.alphabet[(inputIndex - keyIndex + 26) % 26];
        }
        j++
      } else {
        result += input[i];
      }
    }

    return this.direct ? result.toUpperCase() : result.split('').reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
