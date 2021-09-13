import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const hashTable = {};
  const addSuffix = (name, suffix) => `${name}(${suffix})`;
  
  const result = names.map((name) => {
    let suffix = hashTable[name] || 0;    
    hashTable[name] = suffix + 1;

    if (!suffix) return name;
        
    hashTable[addSuffix(name, suffix)] = 1;

    return addSuffix(name, suffix);
  });

  return result;
}
