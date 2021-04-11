/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let result = 0;
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);
  let mid_val = array[mid];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let mid_val = array[mid];
    if (mid_val === value) {
      return mid;
    }
    if (mid_val > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

module.exports = findIndex;

// throw new Error('Not implemented');
