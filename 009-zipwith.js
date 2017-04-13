const R = require('ramda');

// Let’s say we have two lists and we want to join them.
// This is actually quite simple using the zip function.
// However, the usual outcome (an array of elements, which are
// two-valued arrays themselves) may not be the desired one.
// This is where the zipWith function comes into play.
// It uses an arbitrary function to map the values to a single value.

var letters = ["A", "B", "C", "D", "E"];
var numbers = [1, 2, 3];
var zipper = R.zipWith((x, y) => x + y);
console.log(zipper(letters, numbers)); // ["A1", "B2", "C3"]


var dot = R.pipe(R.zipWith((x, y) => x * y), R.sum);
console.log(dot([1, 2, 3], [1, 2, 3]));  // (1*1) + (2*2) + (3*3) = 14
