
"use strict";

varTest();
letTest();

function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
// Example from Mozilla documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

var foo = {}, counter = 0;
foo = { a: 1, b: 2 };

const bar = 'Immutable';
console.log(bar);
// bar = 'mutable'; // Will not throw an error unless you use use strict, but will keep original value.
console.log(bar);
