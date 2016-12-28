'use strict';

const Rx = require('rxjs');

const subject = new Rx.ReplaySubject(100, 500 /* windowTime */);

subject.subscribe({
  next: v => console.log(`observerA: ${v}`)
});

let i = 1;
const intervalID = setInterval(() => subject.next(i++), 200);

const timeoutID = setTimeout(() => {
  subject.subscribe({
    next: v => console.log(`observerB: ${v}`)
  });
}, 1000);

const id = setTimeout(() => {
  clearInterval(intervalID);
  clearTimeout(timeoutID);
  clearTimeout(id);
}, 3000);
