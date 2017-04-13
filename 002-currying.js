const R = require('ramda');

// THE OLD WAY
var quadraticOld = (a, b, c, x) => x * x * a + x * b + c;
quadraticOld(1, 0, 0, 2); //=> 4

// THE FUNCTIONAL WAY
var quadratic = R.curry((a, b, c, x) => x * x * a + x * b + c);
quadratic(1, 0, 0, 2); //=> 4
quadratic(1, 0, 0)(2); //=> 4
quadratic(1, 0)(0)(2); //=> 4
console.log(quadratic(1)(0)(0)(2)); //=> 4
