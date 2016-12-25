'use strict';

const Observable = require('rxjs/Observable').Observable;

require('rxjs/add/observable/of');
require('rxjs/add/operator/map');

Observable.of(1, 2, 3).map(x => `${x}!!!`)
  .subscribe(x => console.log(x));
