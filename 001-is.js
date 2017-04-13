const R = require('ramda');

// THE OLD WAY
function isStringOld (test) {
    return R.is(String, test);
}

var resultOld = isStringOld('foo'); //=> true
console.log(resultOld);

// THE FUNCTIONAL WAY: function composition
var isString = R.is(String);
var result = isString('foo'); //=> true
console.log(result);
