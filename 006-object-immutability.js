const R = require('ramda');

// THESE ARE MUTABLE!
var positionMutable = {
    x: 5,
    y: 9
};
positionMutable.x = 10;
console.log(positionMutable); // changed!

// IMMUTABLE!
const positionImmutable = Object.freeze({ x: 5, y: 9 });
positionImmutable.x = 10;
console.log(positionImmutable); // remains unchanged!
