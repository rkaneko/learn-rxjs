'use strict';

const Rx = require('rxjs');

function multiplyByTen(input) {
  const output = Rx.Observable.create(function subscribe(observer) {
    input.subscribe({
      next: v => observer.next(10 * v),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });
  return output;
}

const input = Rx.Observable.from([1, 2, 3, 4]);
const output = multiplyByTen(input);
output.subscribe(x => console.log(x));
