const fs = require('fs');
const stat = fs.stat;

const ActionIconsMapping = [
  'start.svg',
  'linen.svg',
  'minibar.svg',
  'additional_task.svg',
  'heart.svg',
  'done.svg',
  'inspect.svg',
  'done.svg',
  'redo.svg',
  'done.svg',
  'inspect.svg',
  'done.svg',
  'forbidden.svg',
  'staff_tag.svg',
  'pause.svg',
  'q.svg',
  'rush.svg',
  'clean.svg',
];

const ActionLogIconsMapping = [
  'create.svg',
  'doing.svg',
  'done.svg',
  'pause.svg',
  'timeout.svg',
  'staff_tag.svg',
];

const iconsPath = './src/assets/icon';
const newIconsPath = 'icons';

stat(newIconsPath, (e, st) => {
  if (e) {
    fs.mkdir(newIconsPath, (err, s) => {
      console.log(err, s);
    });
  }
});

[...ActionIconsMapping, ...ActionLogIconsMapping].forEach(icon => {
  const iconFile = `${iconsPath}/${icon}`;
  const readable = fs.createReadStream(iconFile);
  const writeable = fs.createWriteStream(`./${newIconsPath}/${icon}`);
  readable.pipe(writeable);
});
