const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let res = "";
  let symbol = "";
  let temp ="";
  for (let i = 0; i < expr.length / 10; i++) {
    if (expr[i * 10] == '*') {
      res += " ";
      continue;
    }
    temp = "";
    for (let j = i * 10; j < (i * 10) + 10; j += 2) {
      symbol = expr.slice(j, j+2);
      if (symbol == "10") {
        temp += ".";
        continue;
      }
      if (symbol == "11") {
        temp += "-";
        continue;
      }
    }
    res += MORSE_TABLE[temp];
  }
  return res;
}

module.exports = {
    decode
}