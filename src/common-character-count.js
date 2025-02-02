const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
/*Через .includes не получается сделать, хотя метод крайне интересный
 пришлось обычным пребором массива, предварительно сделав его из строки
 если совпадает, удаляем его сплайсом, чтобы больше не считался и +1
 ещё надо поробовать через .findIndex сделать, поидее это возможно*/
function getCommonCharacterCount(s1, s2) {
  let result = 0;

  arrS2 = s2.split("");
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < arrS2.length; j++) {
      if (s1[i] === arrS2[j]) {
        arrS2.splice(j, 1);
        result++;
        break;
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
