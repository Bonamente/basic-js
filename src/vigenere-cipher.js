import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const tabulaRecta = { 
  A: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  B: 'BCDEFGHIJKLMNOPQRSTUVWXYZA',
  C: 'CDEFGHIJKLMNOPQRSTUVWXYZAB',
  D: 'DEFGHIJKLMNOPQRSTUVWXYZABC',
  E: 'EFGHIJKLMNOPQRSTUVWXYZABCD',
  F: 'FGHIJKLMNOPQRSTUVWXYZABCDE',
  G: 'GHIJKLMNOPQRSTUVWXYZABCDEF',
  H: 'HIJKLMNOPQRSTUVWXYZABCDEFG',
  I: 'IJKLMNOPQRSTUVWXYZABCDEFGH',
  J: 'JKLMNOPQRSTUVWXYZABCDEFGHI',
  K: 'KLMNOPQRSTUVWXYZABCDEFGHIJ',
  L: 'LMNOPQRSTUVWXYZABCDEFGHIJK',
  M: 'MNOPQRSTUVWXYZABCDEFGHIJKL',
  N: 'NOPQRSTUVWXYZABCDEFGHIJKLM',
  O: 'OPQRSTUVWXYZABCDEFGHIJKLMN',
  P: 'PQRSTUVWXYZABCDEFGHIJKLMNO',
  Q: 'QRSTUVWXYZABCDEFGHIJKLMNOP',
  R: 'RSTUVWXYZABCDEFGHIJKLMNOPQ',
  S: 'STUVWXYZABCDEFGHIJKLMNOPQR',
  T: 'TUVWXYZABCDEFGHIJKLMNOPQRS',
  U: 'UVWXYZABCDEFGHIJKLMNOPQRST',
  V: 'VWXYZABCDEFGHIJKLMNOPQRSTU',
  W: 'WXYZABCDEFGHIJKLMNOPQRSTUV',
  X: 'XYZABCDEFGHIJKLMNOPQRSTUVW',
  Y: 'YZABCDEFGHIJKLMNOPQRSTUVWX',
  Z: 'ZABCDEFGHIJKLMNOPQRSTUVWXY'
};

export default class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.type = isDirect ? 'direct' : 'reverse';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const messageUC = message.toUpperCase();
    const keyUC = key.match(/[A-Z]/gi).join('').toUpperCase();
   
    let encryptedMessage = '';
    let specialCharacterCount = 0;

    for (let i = 0; i < messageUC.length; i += 1){
      let keyLetter = (i - specialCharacterCount) % keyUC.length;
      let keyIndex = tabulaRecta.A.indexOf(keyUC[keyLetter]);

      if (tabulaRecta[messageUC[i]]) {
        encryptedMessage += tabulaRecta[messageUC[i]][keyIndex];
      } else {
        encryptedMessage += messageUC[i];
        specialCharacterCount += 1;
      }
    }

    return this.type === 'direct' 
      ? encryptedMessage 
      : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const encryptedMessageUC = encryptedMessage.toUpperCase();
    const keyUC = key.match(/[A-Z]/gi).join('').toUpperCase();

    let decryptedMessage = '';
    let specialCharacterCount = 0;

    for (let i = 0; i < encryptedMessageUC.length; i += 1) {
      let keyLetter = (i - specialCharacterCount) % keyUC.length;
      let keyRow = tabulaRecta[keyUC[keyLetter]];

      if (keyRow.indexOf(encryptedMessageUC[i]) !== -1) {
        decryptedMessage += tabulaRecta.A[keyRow.indexOf(encryptedMessageUC[i])];
      } else {
        decryptedMessage += encryptedMessageUC[i];
        specialCharacterCount += 1;
      }
    }

    return this.type === 'direct' 
      ? decryptedMessage 
      : decryptedMessage.split('').reverse().join('');
  }
};
