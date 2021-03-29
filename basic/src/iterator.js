function makeIterator(arr = []) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < arr.length ? {
        value: arr[nextIndex++], // 先取值再 +1
        done: false,
      } : {
        value: undefined,
        done: true,
      }
    }
  }
}
