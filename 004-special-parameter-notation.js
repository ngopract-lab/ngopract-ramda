const R = require('ramda');

var to14FromInclusive = R.range(R.__, 15);
console.log(to14FromInclusive(10)); //=> [10, 11, 12, 13, 14]
