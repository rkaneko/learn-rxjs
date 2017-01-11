'use strict';

const Rx = require('rxjs');

const tick3 = Rx.Observable.from([5, 5, 5]);
const higherOrder = tick3.mapTo(Rx.Observable.from([1, 2, 3]));
const firstOrder = higherOrder.mergeAll(2);
firstOrder.subscribe(v => console.log(v));
