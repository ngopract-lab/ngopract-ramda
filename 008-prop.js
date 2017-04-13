const R = require('ramda');

// old way
console.log({ x: 100}.x); //=> 100
console.log({ x: 100}.y); //=> undefined
// functional way
console.log(R.prop('x', { x: 100 })); //=> 100
console.log(R.prop('x', { y: 50 })); //=> undefined
