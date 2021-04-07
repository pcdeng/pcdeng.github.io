function checkArray(array) {
  return Array.isArray(array) && array.length > 2;
}

function swap(array, left, right) {
  let rightValue = array[right];
  array[right] = array[left];
  array[left] = rightValue;
}

function bubble(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // 从 0 到 `length - 1` 遍历
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  console.log(arr);
  return arr;
}

const a = bubble([10, 9]);
