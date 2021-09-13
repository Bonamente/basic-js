import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const map = new Map();
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    const prevChar = str[i - 1];
    const nextChar = str[i + 1];

    if (map.has(char) && (char === prevChar || char === nextChar)) {
      map.set(char, map.get(char) + 1);
    } else if (!map.has(char) && char === nextChar) {
      map.set(char, 1)
    } else {
      map.set([i], 1);
    }
  }

  for (let [value, count] of map) {
    if (count === 1) {
      result += str[value];
    } else {
      result += `${count}${value}`;
    }   
  } 

  return result;
}
