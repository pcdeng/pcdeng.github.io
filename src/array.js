const b = Array.from([1, 4]);
const a = Array.of(1, 3, 4, 5);

a.find(item => item === a);
a.findIndex(item => item === a);
a.includes(1);

// [1, 3, 4, 5] -> [1, 1, 3, 5]
const c = a.copyWithin(1, 0, 2);
// console.log(c);


const keys = a.keys();
const values = a.values();
const items = a.entries();

// console.log(items.next());


const arr = ['a', a];

const newArr = arr.flat();

console.log(newArr);


const arr = [2,3,4,6];
for (i in arr) { // i 是下标
  const value = arr[i];
  console.log(value);
}
console.log('done');
/*
2
done
*/


Array.prototype.abc = 60;
const secondArr = [2,3,4,6];
for (key in secondArr) { // value 是值
  const value = secondArr[key];
  console.log(value);
}
console.log('2 done');
