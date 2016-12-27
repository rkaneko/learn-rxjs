'use strict';

const Rx = require('rxjs');

const subject = new Rx.Subject();

subject.subscribe({
  next: v => console.log(`observerA: ${v}`),
  complete: () => console.log(`observerA: complete!`)
});

subject.subscribe({
  next: v => console.log(`observerB: ${v}`),
  complete: () => console.log(`observerB: complete!`)
});

subject.next(1);
subject.next(2);
subject.complete();
