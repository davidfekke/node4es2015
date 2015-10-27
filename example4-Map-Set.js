"use strict";

var myMap = new WeakMap();
var a1 = {};
var b1 = {};

myMap.set(a1, 'foo');

console.log(myMap.get(a1));

console.log(myMap.has(a1));
console.log(myMap.has(b1));

myMap.delete(a1);
console.log(myMap.has(a1));

var mySet = new WeakSet();
var c1 = {};
var c2 = {};
var c3 = {};

mySet.add(c1);
mySet.add(c2);

console.log(mySet.has(c2)); // true
console.log(mySet.has(c3));    // false, foo has not been added to the set

mySet.delete(c2); // removes window from the set
console.log(mySet.has(c2));    // false, window has been removed

