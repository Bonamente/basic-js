import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  const chars2 = s2.split('');
  let count = 0;

  for (const char1 of s1){
    const idx = chars2.findIndex((char2) => char1 === char2);

    if (idx >= 0) {
      count += 1;
      chars2.splice(idx, 1);
    }
  }
  
  return count;
}
