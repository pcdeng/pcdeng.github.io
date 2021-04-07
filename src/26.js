const a = 'aa';
const b = 'bc';

// [a...z] -> ASCII 码点 -> [97, 122]
// -> 字符的码点 - 96 得到 [a...z] -> [1...27]

let result = toNumber(b) - toNumber(a);

console.log(`distance is ${result}`);

function toNumber(str) {
  let total = 0;
  const len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    const letter = str[len - i - 1];
    const value = letter.charCodeAt(0) - 96;
    total += (value)* Math.pow(26, i);
    console.log(`letter is ${letter}, ${value} * 26^${i}`);
  }
  console.log(`str is ${str}, num is ${total}`);
  return total;
}
