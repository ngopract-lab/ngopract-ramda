const R = require('ramda');

// better than Array.prototype.map since it supports currying
console.log(R.map(x => 2 * x, [1, 2, 3])); //=> [2, 4, 6]
