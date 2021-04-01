"use strict";

class Practice {

  constructor(fruits=["Apple", "Banana"]) {
    this.fruits = fruits; // 索引是0->第一个元素，索引fruits.length - 1->最后一个元素
  }

  push() { // 添加元素到数组的末尾
    let newLength = this.fruits.push("Orange");
    console.log(`新的数组长度是${newLength}`);
  }

  pop() { // 删除数组末尾的元素
    let last = this.fruits.pop();
    console.log('last is:', last);    
  }

  unshift() { // 添加元素到数组头部
    this.fruits.unshift('Strawberry');
    console.log('fruits are:', this.fruits);
  }

  shift() { // 删除数组最前面的元素
    var first = this.fruits.shift();
    console.log('first is:', first);
  }

  indexOf() { // 找到某个元素在数组中的索引
    var pos = this.fruits.indexOf('Strawberry');
    console.log('pos is:', pos);
    return pos;
  }

  splice() { // 通过索引删除某个元素
    var removedItem = this.fruits.splice(pos, 1);
    console.log('removedItem is:', removedItem);
    console.log('fruits are:', this.fruits);
  }

  slice() { // 复制一个数组
    var shallowCopy = this.fruits.slice();
    console.log('shallowCopy are:', shallowCopy);
  }

  copy() { // 使用正则匹配的结果来创建数组
    var myRe = /d(b+)(d)/i;
    var myArray = myRe.exec("cdbBdbsbz");
    console.log('myArray are:', myArray);
  }

  copy1() { // 从一个类似数组或者可迭代对象创建一个新的数组实例
    const bar = ['a', 'b', 'c'];
    const barCopy = Array.from(bar);
    console.log('barCopy are:', barCopy);
  }

  forEach() { // 遍历一个数组
    this.fruits.forEach((item, index, arr) => {
      console.log(item, index, arr);
    });
  }

  map() { // map, 返回新数组
    let connections = [{
      name: 'Connection A',
      key: 1,
      displayName: '' // 默认为空
    }, {
      name: 'Connection B',
      key: 2,
      displayName: '' // 默认为空
    }];
    let newConnections = connections.map((connection) => {
      let displayName = `${connection.name}-${connection.key}`;
      connection.displayName = displayName; // add `displayName` property to connection

      return connection;
    });
    console.log('old connections is:', connections);
    console.log('new connections is:', newConnections);
  }

  filter() { // 返回新数组
    let result = [1, 5, 8, 10, 1000, 104343].filter((item, index, arr) => {
      return item % 2 === 0; // 筛选出偶数
    });
    console.log('result is', result);
  }

  reduce() { // 返回最后一个返回的结果
    let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((previous, current, index) => {
      return previous + current;
    });
    console.log('result is', result);
  }

  findIndex() {
    let arr = [1, 2, 4, 8, 9];
    let index = arr.findIndex(item => {
      return item === 9;
    });
    console.log('index is:', index);
  }
}

function mapFun(item, index) {
  console.log(item, index);
  console.log(this);
  this.setName(item);
}

function MySort() {
  this.name = '';
};

MySort.prototype.setName = function(name) {
  this.name = name;
}

let p = new Practice();
p.reduce();