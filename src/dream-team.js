import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const dreamTeam = [];
  const length = members.length;

  for (let i = 0; i < length; i += 1) {
    const member = members[i];

    if (typeof member !== 'string') continue;

    const trimmed = member.trim();   
    dreamTeam.push(trimmed[0].toUpperCase());    
  }

  const compare = function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;

    return 0; 
  }

  return dreamTeam.sort(compare).join('');  
}
