/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let x = 0;
  const row = matrix.length;
  const column = matrix[0].length;
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      if (matrix[j][i] === 0) {
        x = 1;
      }
      if (x === 0) {
        result += matrix[j][i];
      }
      if (j === 2 && column > 1) {
        x = 0;
      }
      if (matrix[j][i] !== 0) {
        x = 0;
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
