const R = require('ramda');

console.log(R.range(1, 5)); // [1, 2, 3, 4]
console.log(R.sum([1, 2, 3, 4])); // 10
console.log(R.sum(R.range(1, 5))); // 10
