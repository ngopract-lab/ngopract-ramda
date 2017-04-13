const R = require('ramda');

// THE OLD MUTABLE WAY
var arr = ['just', 'a', 'mutable', 'array'];
arr.push('wow');
console.log(arr); // => [ 'just', 'a', 'mutable', 'array', 'wow' ]

// FUNCTIONAL WAY
console.log(R.append('tests', ['write', 'more'])); //=> ['write', 'more', 'tests']
console.log(R.remove('write', 'tests', ['write', 'more', 'tests'])); //=> ['more']
