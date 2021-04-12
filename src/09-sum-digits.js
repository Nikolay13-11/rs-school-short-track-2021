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
function getSumOfDigits(n) {
  let str = n.toString();
  let arr = str.split('');
  let result = 0;
  let k = 1;
  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  for (let t = 0; t < k; t++) {
    if (result < 10) {
      return result;
    }
    str = result.toString();
    arr = str.split('');
    result = 0;
    for (let z = 0; z < arr.length; z++) {
      result += Number(arr[z]);
    }
    k++;
  }
  return null;
}

module.exports = getSumOfDigits;
