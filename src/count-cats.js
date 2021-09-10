import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  return matrix.reduce((acc, item) => {
    for (let i = 0; i < item.length; i += 1) {
      if (item[i] === '^^') acc += 1;
    }
    return acc;
  }, 0);
}
