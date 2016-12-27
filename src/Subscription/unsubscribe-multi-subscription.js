'use strict';

const Observable = require('rxjs/Observable').Observable;

const observable1 = Observable.create(function subscribe(observer) {
  const intervalID = setInterval(() => {
    observer.next('hey!');
  }, 500);

  return function unsubscribe() {
    console.log('unsubscribing 1');
    clearInterval(intervalID);
  };
});

const observable2 = Observable.create(function subscribe(observer) {
  const intervalID = setInterval(() => {
    observer.next('hey child!');
  }, 500);

  return function unsubscribe() {
    console.log('unsubscribing 2');
    clearInterval(intervalID);
  };
});

const subscription = observable1.subscribe(x => console.log(x));
const childSubscription = observable2.subscribe(x => console.log(x));

subscription.add(childSubscription);

const timeoutID = setTimeout(() => {
  subscription.unsubscribe();
  clearTimeout(timeoutID);
}, 3000);
