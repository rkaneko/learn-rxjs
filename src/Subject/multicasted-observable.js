'use strict';

const Rx = require('rxjs');

// const source = Rx.Observable.from([1, 2, 3]);
const source = Rx.Observable.create(function subscribe(observer) {
  let i = 1;
  const intervalID = setInterval(() => {
    observer.next(i++);
    if (i === 2) {
      observer.complete(); // complete will also invoke unsubscribe()
    }
  }, 1000);
  return function unsubscribe() {
    console.log('unsubscribing...');
    clearInterval(intervalID);
  };
});
const subject = new Rx.Subject();
const multicasted = source.multicast(subject);

multicasted.subscribe({
  next: v => console.log(`observerA: ${v}`),
  error: err => console.error(`observerA: ${err}`),
  complete: () => console.log('observerA: complete!')
});

multicasted.subscribe({
  next: v => console.log(`observerB: ${v}`)
});

const subscription = multicasted.connect();  // under the hood, `source.subscribe(subject)`;

// const timeoutID = setTimeout(() => {
//   subscription.unsubscribe();
//   clearTimeout(timeoutID);
// }, 5000);
