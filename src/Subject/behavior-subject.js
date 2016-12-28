'use strict';

const Rx = require('rxjs');

const subject = new Rx.BehaviorSubject(0);


subject.subscribe({
  next: v => console.log(`observerA: ${v}`)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: v => console.log(`observerB: ${v}`)
});

const timeoutID = setTimeout(() => {
  subject.subscribe({
    next: v => console.log(`observerC: ${v}`)
  });
  clearTimeout(timeoutID);
}, 1000);

subject.next(3);
