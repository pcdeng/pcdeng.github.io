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

