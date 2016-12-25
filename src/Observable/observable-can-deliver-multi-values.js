'use strict';

const Observable = require('rxjs/Observable').Observable;

const foo = Observable.create(observer => {
  console.log('Hello');
  observer.next(42);
  observer.next(100);
  observer.next(200);
});

console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');
