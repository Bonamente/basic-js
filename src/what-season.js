import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (typeof date === 'undefined') return 'Unable to determine the time of year!';
  
  if (!(date instanceof Date)) throw new Error("Invalid date!");  

  if (date instanceof Date) {    
    if (Object.keys(date).length > 0) throw new Error("Invalid date!");    
  }
  
  const month = date.getMonth();

  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4: 
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    default:
      return 'autumn';
  }
}
