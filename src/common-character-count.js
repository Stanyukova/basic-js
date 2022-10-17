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
 function getCommonCharacterCount(s1, s2) {
  count = 0;
  let arr = s2.split('');
  for (let item of s1.split('')) {
    console.log(1, item)
    if ( (arr.findIndex(el => el === item )) >= 0 ) {
        console.log(arr, item)
        let i = arr.indexOf(item);
        arr.splice(i, 1);
        count++; 
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
