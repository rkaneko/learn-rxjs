'use strict';

const Rx = require('rxjs');

const counts = Rx.Observable.interval(1000).timeInterval().map(t => t.value).take(4);
const result = counts.concatMap(count => Rx.Observable.interval(1000).mapTo(3).take(2).map(three => count + three));
result.subscribe(x => console.dir(x));
