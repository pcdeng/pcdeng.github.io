/**
 * 最简单的直观的写法
 */
function unique(arr = []) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (temp.indexOf(arr[i]) === -1) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

/**
 * 速度最快，占空间最多（空间换时间）
 */
function unique2(arr = []) {
  var n = {},
    r = [],
    type;
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    type = typeof value;
    if (!n[value]) {
      n[value] = [type];
      r.push(value);
    } else if (n[value].indexOf(type) < 0) {
      n[value].push(type);
      r.push(value);
    }
  }
  return r;
}

/**
 * 使用 Set 和解构
 * @param Array inputArr
 * @returns Array
 */
function uniqueSet(inputArr = []) {
  return [...new Set(inputArr)];
}

/**
 * 使用 Array.from 和 Set
 * @param {*} inputArr
 * @returns
 */
export function uniqueArrayFromSet(inputArr = []) {
  let arr = Array.from(new Set(inputArr));
  return arr;
}

export function testUniqueSet() {
  let oldArr = [1, 2, 4, 6, 7, 9, 10, 1, 9, 90, 4];
  const newArr = uniqueSet(oldArr);
  log(newArr);
}
