"use strict";

function *getSomeValues() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
}

var someValues = getSomeValues();

console.log(someValues.next());
console.log(someValues.next());
console.log(someValues.next());
console.log(someValues.next());
console.log(someValues.next());
console.log(someValues.next());