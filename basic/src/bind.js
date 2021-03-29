/**
 * bind() 方法创建一个新的函数，
 * 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
 */
this.x = 9;

var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
}

const a = module.getX();
log(a);

const getX = module.getX; // 获取 getX 引用

// 创建一个新函数，把 'this' 绑定到 module 对象
const boundGetX = getX.bind(module); // this 指向 global，在浏览器中 global 就是 window
log(boundGetX());


/**
 * 偏函数
 */
function add(x, y) {
  return x + y;
}

const add3 = add.bind(null, 3); // 3 赋值了 x
const result = add3(4);
log(result);

/**
 * 和 setTimeout 使用
 */
function Demo() {
  // Math.random() -> [0, 1) -> * 12 -> [0, 11) -> 向上取整 [0, 12] + 1 -> [1, 13]
  this.petalCount = Math.ceil(Math.random() * 12) + 1; // [1, 13] 的随机数
  log(this.petalCount);
}

Demo.prototype.walk = function() {
  setTimeout(this.open.bind(this), 1000);
}

Demo.prototype.open = function() {
  log(`${this.petalCount} open`);
}

function testBind() {
  const d = new Demo(); // 实例化 Demo 类
  d.walk(); // 调用 walk 方法
}


/**
 * 快捷调用
 */
var slice = Array.prototype.slice;
slice.apply(arguments);

// 与前一段代码的 "slice" 效果相同
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice); // -> slice.apply()
slice(arguments);
