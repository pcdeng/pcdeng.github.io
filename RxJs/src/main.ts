import { from, throwError, of, interval, defer } from 'rxjs';
import { retry, catchError, retryWhen, flatMap, delay, mergeMap, takeWhile, scan, map, tap } from 'rxjs/operators';

function request(url: string, method: string = 'GET') {
  console.log('request start.');
  return new Promise((resolve, reject) => {
    if (!url) {
      reject('url is empty');
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onprogress = () => {
        console.log('loading:', xhr.readyState);
      }
      xhr.onreadystatechange = val => {
        console.log(`onreadystatechanged, readyState is: ${xhr.readyState}`);
        if (xhr.readyState === 4) { // request completed
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            reject(`request fail: status code is: ${xhr.status}`);
          }
        }
      };
      xhr.send();
    }
  });
}

const example = defer(() => request('https://jsonplaceholder.typicode.com/todoss/1')).pipe(
  retryWhen(err => {
    return err.pipe(
      scan((acc, curr) => {
        if (acc >= 3) {
          throw 'Tried 3 times to get refresh token, but failed.';
        }
        return acc + 1;
      }, 1),
      delay(1000),
    )
  }),
  tap(
    () => {},
    err => {
      console.log(err);
    })
);

example.subscribe((val) => {
  console.log('next:', val);
}, err => {
  console.log('error is:', err);
}, () => {
  console.log('complete');
});
