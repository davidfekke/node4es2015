"use strict";
//Available in Node 5.0

// Merging arrays

// Code with spread operator
let inner = [3, 4];
let merged = [0, 1, 2, ...inner, 5]; //Spread operator will fail if run in Node 4.X

console.log(merged);

// In ES5 you would have to do this by using the concat method.
// var inner = [3, 4];
// var merged = [0, 1, 2].concat(inner, [5]);