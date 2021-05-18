const str = `我写代码已经有很多年了，但是一直写的都是简单、小规模的代码
还没涉及过大规模的代码。我期望成为一个全栈工程师，写最好的代码。`;
const reg = /代码/g;
let count = 0;

console.log(`样本长度：${str.length}`);
while(true) {
    var match = reg.exec(str);
    if (!match) {
        break;
    }
    console.log(`#${match.index}:${match[0]}`);
    count++;
}

console.log(`${reg.source} 出现总次数：${str.match(reg).length}`);