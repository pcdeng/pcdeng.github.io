/**
 * 定义个函数（类）
 * @param Function fn 
 */
// function Promise(fn) {
//     this.cbs = [];

//     const resolve = (value) => {
//         setTimeout(() => {
//             this.data = value;
//             this.cbs.forEach((cb) => cb(value));
//         });
//     }

//     fn(resolve.bind(this));
// }

// Promise.prototype.then = function (onResolved) {
//     return new Promise((resolve) => {
//         this.cbs.push(() => {
//             const res = onResolved(this.data);
//             if (res instanceof Promise) {
//                 res.then(resolve);
//             } else {
//                 resolve(res);
//             }
//         });
//     });
// };

/**
 * 异步操作
 * @param {*} resolve 
 */
function asyncProcess(resolve) {
    console.log('开始执行异步操作');
    setTimeout(() => {
        console.log('异步操作完成');
        resolve('done');
    }, 1000);
}

/**
 * 成功回调
 * @param String value 
 */
function onSuccess(value) {
    console.log('异步完成的结果：', value);
}

// const p1 = new Promise(asyncProcess);
// p1.then(onSuccess);

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fun1 done');
        }, 1000);
    });
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fun2 done');
        }, 1500);
    });
}

Promise.all([fun1(), fun2()]).then(([result1, result2]) => {
	console.log(result1, result2);
});


window.addEventListener("unhandledrejection", event => {
    /* 你可以在这里添加一些代码，以便检查
       event.promise 中的 promise 和
       event.reason 中的 rejection 原因 */

    event.preventDefault();
}, false);