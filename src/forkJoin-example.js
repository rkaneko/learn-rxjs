'use strict';

const Rx = require('rxjs');

const source = Rx.Observable.forkJoin(
  Rx.Observable.of(1),
  Rx.Observable.of(2),
  Rx.Observable.of(3),
  (...theArgs) => theArgs.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
);

source.subscribe(v => console.log(v));  // 6
