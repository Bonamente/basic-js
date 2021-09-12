import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const parts = [];
  const result = {};  
  
  for (let domain of domains) {    
    parts.push(domain.split('.'));
  } 

  for (let i = 0; i < parts.length; i += 1) {
    const row = parts[i];
    let dns = '';

    for (let j = row.length - 1; j >= 0; j -= 1) {
      dns += `.${row[j]}`;
      
      if (result[dns]) {
        result[dns] += 1;
      } else {
        result[dns] = 1;
      }
    }
  }  

  return result;  
}
