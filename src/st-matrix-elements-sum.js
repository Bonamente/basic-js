import { NotImplementedError } from '../extensions/index.js';

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
export default function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let pos = 0; pos < cols; pos += 1) {
     const rowAbove = matrix[row - 1];
     
     if (row === 0 || (rowAbove && rowAbove[pos] > 0)) {        
        sum += matrix[row][pos];
      }
    }
  }  

  return sum;
}
