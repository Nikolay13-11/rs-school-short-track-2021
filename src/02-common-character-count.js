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
  if (s1.length === 0) {
    return 0;
  }
  let result = 0;
  let a = 0;
  const arra = s1.split('');
  const arrb = s2.split('');
  for (let i = 0; i < arra.length; i++) {
    if (arrb.includes(arra[i])) {
      a = arrb.indexOf(arra[i]);
      result++;
      arrb.splice(a, 1);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
