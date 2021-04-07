const obj = {
  a: 'a',
  b: 'b',
};

const prototype = {
  name: 'Payton',
};

Object.setPrototypeOf(obj, prototype);

for (let key in obj) {
  console.log(key);
}
