
var foo = {};
foo = { a: 1, b: 2 };

const bar = 'Immutable';
console.log(bar);
bar = 'mutable'; // Will not throw an error, but will keep original value.
console.log(bar);
