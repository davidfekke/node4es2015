"use strict";

let printName = name => console.log(`Your user group name is ${name}`); 

printName('JaxNode');

// Lexical this from Babel documentation.
var bob = {
  _name: "Bob",
  _friends: ['Tommy', 'Richard', 'Susan'],
  printFriends1() {
	// Here we hoist the this object into that so we can use it in the closure function.
	var that = this;
    this._friends.forEach(function (friend, index){
		console.log(`${that._name}  knows  ${friend}`);	
	});
  },
  printFriends2() {
	// Here there is no need to hoist the this object because it can be scoped in the lambda.
    this._friends.forEach(f =>
      console.log(`${this._name}  knows  ${f}`));
  }
};

bob.printFriends1();
bob.printFriends2();