const range = [
  {
    time: '2020-10-28T01:44:03+08:00',
    height: '121.27',
    type: 'low',
  },
  {
    time: '2020-10-28T07:31:17+08:00',
    height: '193.20',
    type: 'high',
  },
  {
    time: '2020-10-28T14:06:44+08:00',
    height: '63.42',
    type: 'low',
  },
  {
    time: '2020-10-28T20:45:37+08:00',
    height: '182.23',
    type: 'high',
  },
];

const result = [];
const result1 = [];

for (let i = 0; i < range.length - 2; i = i + 1) {
  const cur = range[i];
  const next = range[i + 1];
  if (cur.type === 'low' && next.type === 'high') {
    result.push(`${parseTime(cur.time)}-${parseTime(next.time)}涨潮`);
    result1.push(`${parseTime(cur.time)}-${parseTime(next.time)}`);
  } else if (cur.type === 'high' && next.type === 'low') {
    result.push(`${parseTime(cur.time)}-${parseTime(next.time)}退潮`);
  }
  console.log(cur, next);
}

console.log(`${result.join('，')}, 最佳鱼口时间：${result1.join('；')}`);

function parseTime(time) {
  const a = new Date(time);
  const h = padZero(a.getHours());
  const minutes = padZero(a.getMinutes());
  return `${h}:${minutes}`;
}

function padZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
