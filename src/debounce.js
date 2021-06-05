const debounce = function (func, wait = 300) {
  let timer = 0;
  return function (...args) {
    // args 是什么？
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args); // args 是一个数组
    }, wait);
  };
};

const aEle = document.getElementById('btn');
aEle.addEventListener(
  'click',
  debounce((f) => {
    console.log(f);
    console.log('invoke');
  }),
);
