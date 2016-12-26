'use strict';

const Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/from');

const observable = Observable.from([10, 20, 30]);
const subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();
