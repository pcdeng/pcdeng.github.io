function makeIterator(arr = []) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < arr.length
        ? {
            value: arr[nextIndex++], // 先取值再 +1
            done: false,
          }
        : {
            value: undefined,
            done: true,
          };
    },
  };
}

class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {
        value: value,
        done: false,
      };
    }
    return {
      value: undefined,
      done: true,
    };
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (let value of range(1, 5)) {
  // console.log(value);
}

/**
 * 通过遍历器实现指针结构
 * @param {*} value
 */
function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[Symbol.iterator] = function () {
  var iterator = {
    next: next,
  };

  var current = this;

  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return {
        value: value,
        done: false,
      };
    }
    return {
      done: true,
    };
  }

  return iterator;
};

const o1 = new Obj(1);
const o2 = new Obj(2);
const o3 = new Obj(3);
o1.next = o2;
o2.next = o3;

for (var o of o1) {
  console.log(o);
}
