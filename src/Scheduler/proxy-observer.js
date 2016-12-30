'use strict';

const Rx = require('rxjs');

const observable = Rx.Observable.create(function subscribe(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
})
.observeOn(Rx.Scheduler.async);

const finalObserver = {
  next: x => console.log(`got value: ${x}`),
  error: err => console.error(`something wrong occurred: ${err}`),
  complete: () => console.log('done')
};

const proxyObserver = {
  next: val => {
    Rx.Scheduler.async.schedule(
      x => finalObserver.next(x),
      1000 /* deplay */,
      val
    );
  },
  error: err => finalObserver.error(err),
  complete: () => finalObserver.complete()
};

console.log('just before subscribe');
observable.subscribe(proxyObserver);
console.log('just after subscribe');
