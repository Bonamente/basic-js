import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const digits = [];  
  let number = n;
  let result = 0;

  while (number) {
    digits.push(number % 10);
    number = Math.floor(number / 10);
  }

  for (let i = 0; i < digits.length; i += 1) {
    let num = 0;

    for (let j = digits.length - 1; j >= 0; j -= 1) {
      if (j !== i) num = num * 10 + digits[j];      
    }

    result = Math.max(num, result);
  }

  return result;
}
