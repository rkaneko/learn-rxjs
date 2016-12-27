'use strict';

const Rx = require('rxjs');

const subject = new Rx.Subject();

subject.subscribe({
  next: v => console.log(`observerA: ${v}`)
});


subject.subscribe({
  next: v => console.log(`observerB: ${v}`)
});

const observable = Rx.Observable.from([1, 2, 3]);
observable.subscribe(subject);
