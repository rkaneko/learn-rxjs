'use strict';

const Rx = require('rxjs');

const source = Rx.Observable.interval(500);
const subject = new Rx.Subject();
const refCounted = source.multicast(subject).refCount();

console.log('observerA subscribed');
const subscriptionA = refCounted.subscribe({
  next: v => console.log(`observerA: ${v}`)
});

let subscriptionB;
const id1 = setTimeout(() => {
  console.log('observerB subscribed');
  subscriptionB = refCounted.subscribe({
    next: v => console.log(`observerB: ${v}`)
  });
}, 600);

const id2 = setTimeout(() => {
  console.log('observerA unsubscribed');
  subscriptionA.unsubscribe();
}, 1200);

const id3 = setTimeout(() => {
  console.log('observerB unsubscribed');
  subscriptionB.unsubscribe();
}, 2000);

const id4 = setTimeout(() => {
  [id1, id2, id3, id4].forEach(id => {
    clearTimeout(id);
  });
  console.log('clear resources');
}, 3000);
