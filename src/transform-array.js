import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  
  const last = arr.length - 1;
  const result = [];

  for (let i = 0; i <= last; i += 1) {
    const item = arr[i];    

    if (item === '--discard-next') {
      if (i === last) continue;
      
      result.push(' ');
      i += 1
      continue;
    } 
    
    if (item === '--discard-prev') {
      if (i === 0) continue;

      result.pop();
      continue;      
    }

    if (item === '--double-next') {
      if (i === last) continue;
      
      result.push(arr[i + 1]);
      continue;
    }

    if (item === '--double-prev') {
      if (i === 0) continue;
      
      if (result[result.length - 1] === ' ') {
        result.pop();
        continue;
      }

      result.push(result[result.length - 1])
      continue;    
    }

    result.push(item);
  }

  return result;
}
