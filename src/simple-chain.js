import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = '( )') {    
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || (position < 1 || position > this.getLength())) {
      this.chain.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    } 

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain.length = 0;

    return result;
  }
};
