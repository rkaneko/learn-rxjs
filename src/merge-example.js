'use strict';

const Rx = require('rxjs');

const tick1 = Rx.Observable.interval(1000).mapTo(1).take(10);
const tick2 = Rx.Observable.interval(2000).mapTo(2).take(5);

const concurrent = 2;
const merged = tick1.merge(tick2, concurrent);
merged.subscribe(x => console.log(x));
