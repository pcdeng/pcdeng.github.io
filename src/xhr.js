const url = 'https://api.github.com/users/pcdeng/repos';
const accessToken = '';
const privateKey = '';
const data = {};
const STATES = [
  {
    code: 0,
    name: 'UNSENT',
    description: '代理被创建，但尚未调用 open() 方法。',
  },
  {
    code: 1,
    name: 'OPENED',
    description: 'open() 方法已经被调用。',
  },
  {
    code: 2,
    name: 'HEADERS_RECEIVED',
    description: 'send() 方法已经被调用，并且头部和状态已经可获得。',
  },
  {
    code: 3,
    name: 'LOADING',
    description: '下载中； responseText 属性已经包含部分数据。',
  },
  {
    code: 4,
    name: 'DONE',
    description: '下载操作已完成。',
  },
];
var xhr = new XMLHttpRequest();
xhr.withCredentials = false; // false 代表不带 cookie 到服务器
trace(xhr.readyState);
xhr.open('GET', url);
trace(xhr.readyState);
// xhr.setRequestHeader('AccessToken', accessToken);
// xhr.setRequestHeader('PrivateKey', privateKey);
xhr.setRequestHeader('Accept', 'application/json');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));
xhr.onreadystatechange = (ev) => {
  trace(xhr.readyState);
  if (xhr.readyState === xhr.HEADERS_RECEIVED) {
    console.log(xhr.getAllResponseHeaders());
  } else if (xhr.readyState === xhr.LOADING) {
    // console.log(xhr.responseText);
  } else if (xhr.readyState === xhr.DONE) {
    console.log('我的 GitHub 项目：');
    console.table(JSON.parse(xhr.response).map((item) => item.name));
  }
};

function trace(state) {
  const stateObj = STATES[state];
  if (stateObj) {
    console.log(`[${stateObj.name}]: ${stateObj.description}`);
  }
}
