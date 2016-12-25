'use strict';

const Observable = require('rxjs/Observable').Observable;

const foo = Observable.create(observer => {
  console.log('Hello');
  observer.next(42);
});

console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');
