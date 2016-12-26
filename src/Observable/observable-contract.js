'use strict';

const Observable = require('rxjs/Observable').Observable;

const observable = Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    throw new Error('Error!');
    observer.next(4); // be not invoked
  } catch (err) {
    observer.complete();
    observer.error(err);  // be not invoked because complete notification has been already delivered
  }
});

observable.subscribe({
  next: x => { console.log(x); },
  error: err => { console.error(err); },
  complete: () => { console.log('Completed!'); }
});
