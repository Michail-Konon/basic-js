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
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberAlphabetLetters = 26;

class VigenereCipheringMachine {
  constructor(reverse = true){
    this.isReverse = reverse
  }

  encrypt(message, key) {
    return this.stringComputation(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this.stringComputation(message,key, 'decrypt')
  }

  letterFindIndex(letter) {
    let letterIndex =  alphabet.findIndex(item => item === letter);
    if(letterIndex === -1) return letter;
    return letterIndex;
  }
  resultString(arr) {
    return arr.join('').toUpperCase();
  }

  stringComputation(message, key, type)  {
    if(message === undefined || key === undefined) throw new Error("Incorrect arguments!");
    message = message.toLowerCase();
    key = key.toLowerCase();
    let newArr = [];
    let keyCurrent = 0;
    for(let i = 0; i <= message.length -1; i++) {
      if(key[keyCurrent] === undefined) keyCurrent = 0;
      let messageIndex = this.letterFindIndex(message[i]);
      let keyIndex = this.letterFindIndex(key[keyCurrent]);
      ++keyCurrent;
      if(message[i] === ' ') {
        keyCurrent -= 1;
        newArr.push(' ');
      } else {
        if(typeof messageIndex !== "number") newArr.push(messageIndex);
        else {
          if(type === 'decrypt') {
            newArr.push(alphabet[(messageIndex + numberAlphabetLetters - keyIndex) % numberAlphabetLetters]);
          } else if (type === 'encrypt') {
            newArr.push(alphabet[(messageIndex + keyIndex) % numberAlphabetLetters]);
          }
        }
      }
    }
    return !this.isReverse ? this.resultString(newArr.reverse()) : this.resultString(newArr);
  }
}

module.exports = {
  VigenereCipheringMachine
};
