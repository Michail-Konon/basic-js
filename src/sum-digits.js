const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
/* Thanks to the internet i find interesting idea.
   When we sum all elements of a large digits and and do this until one-digit number remains.
   We just simly teke module 9 of this number. It is somehow relates to "Casting out nines"
   arithmetical procedure but i cant fully understand its logic. Code wasnt work without "|| 9" 
   because any digit that may be divided to 9 make give us '0' that is invalid result. 
   Quite interesting procedure, need to understand it.
   */

function getSumOfDigits(n) {
    let sum = 0
  return sum  = n % 9 || 9;
}

module.exports = {
  getSumOfDigits
};
