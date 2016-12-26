'use strict';

const Observable = require('rxjs/Observable').Observable;

const observable = Observable.create(function subscribe(observer) {
  // Keep track of the interval resource
  const intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);

  // define to dispose resouces
  return function unsubscribe() {
    console.log(`invoking unsubscribe()`);
    clearInterval(intervalID);
  };
});

const subscription = observable.subscribe(x => console.log(x));
const intervalID = setInterval(() => {
  console.log('tick');
  subscription.unsubscribe();
  clearInterval(intervalID);
}, 3000);
