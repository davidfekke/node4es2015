# Repo for the November JaxNode meetup examples.

This repo contains the examples from the JaxNode November 2015 presentation.
You can view the [slides](http://slides.com/davidfekke/node_4#/  target="blank") for this presentation
at [slides.com/davidfekke/node_4](http://slides.com/davidfekke/node_4#/  target="blank").

## Classes

One of the more distinctive features added to ES2015 is the use of the class keyword. 
In ES5 if you wanted to implement class style functions the syntax was rather terse. 
In the example below you can see an example of a class inheriting from another class
using the old syntax;

```javascript
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MeetupGroup = (function () {
    function MeetupGroup(name) {
        this.name = name;
    }
    MeetupGroup.prototype.Say = function () {
        console.log("This the " + this.name + " meetup group!");
    };
    return MeetupGroup;
})();
var JavaScriptGroup = (function (_super) {
    __extends(JavaScriptGroup, _super);
    function JavaScriptGroup() {
        _super.apply(this, arguments);
    }
    JavaScriptGroup.prototype.Say = function () {
        _super.prototype.Say.call(this);
        console.log('And is a JavaScript User Group.');
    };
    return JavaScriptGroup;
})(MeetupGroup);
var meetup = new MeetupGroup('JaxNode');
meetup.Say();
```  

Now with the new `class` keyword, the syntax is more concise and 
easier to read.

```javascript
"use strict";

class MeetupGroup {
	constructor(name) {
		this.name = name;
	}
	
	Say() {
		// Notice use of string templates.
		console.log(`This the ${this.name} meetup group!`);
	}
}

class JavaScriptGroup extends MeetupGroup {
	Say() {
		super.Say()
		console.log('And is a JavaScript User Group.');
	}
}

let meetup = new MeetupGroup('JaxNode');

meetup.Say();
```

## For-Of

ES2015 also adds a new way way of iterating over collections, arrays etc.
You can now use the `of` keyword in your for loops. Previously
For-In would ieterate over the index value and not the item. 
There is also a _feature_ that would include properties
along with the index.

```javascript
"use strict";

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}
```  

Now with the For-Of syntax, this works a lot more like the C#
foreach.

```javascript
"use strict";

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
```
## Const

The `const` keyword now gives us the ability to make a variable
immutable or readonly. This is a feature that is very popular in 
functional languages like F#.

```javascript
"use strict";

const bar = 'Immutable';
console.log(bar);
bar = 'mutable'; // will throw error with --use-strict
console.log(bar);
```

## Let

The `let` keyword is another way of declaring variables, 
but with the advantage of restricting the variable to the
scope of the code block. With the `var` keyword, the 
variable always gets hoisted to the top of its scope.

```javascript
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 71
}
``` 

If you use `let` instead of `var`, the variable value will
work in it's code block.

```javascript
function varTest() {
  var x = 31;
  if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
  }
  console.log(x);  // 31
}
``` 

## Sets and WeakSets

Sets are basically just collections. This object
comes with built in functions for adding, checking
and deleting values from that collection. WeakSets are version of sets, but for objects with 
better garbage collection.   

```javascript
var mySet = new Set([34, 22, 79]);
```
You can add a value to your set by using the `add()` function.

```javascript
mySet.add(99);
```

If you want to verify that a `Set` has a value, 
you can use the `has()` function.

```javascript
mySet.has(99); // returns true
```
You can also delete a value from your `Set` by using the 
`delete` function.

```javascript
mySet.delete(99);
mySet.has(99); // returns false
```

## Maps and WeakMaps

Maps are essentially the same as HashMaps in Java 
or Dictionaries in C#. It allows you to store collections
of key/value pairs. This object also comes with built in 
functions for adding, checking, getting and deleting key/value pairs.

```javascript
var myMap = new Map([[ 'John', 34], ['Bill', 22], ['Burt', 79]);
```
You can add key value to a map by using the `set()` function.

```javascript
myMap.set('Sarah', 29);
```

You can also verify if there is a key value pair in your map
by calling the `has(key)` function.

```javascript
myMap.has('Sarah');
```

You can return the value for a given key by using 
the `get(key)` function.

```javascript
myMap.get('Sarah'); // returns 29;
```

## Generators 

Generator objects are returned by generator functions, 
and conform to both iterator and the iterable interface.
You will recognize generator functions by the asterisk (*)
that follows the `function *` keyword. These functions
use the `yield` keyword to return an iteration
of the function rather than closing the function.

Once you create a generator object by calling
the generator function, you can use the `next()` function
to return an iteration from the object. That method
returns a tuple that includes the value and a `done` boolean
value to know when the generator is done. 

```javascript
"use strict";

function *getSomeValues() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
}

var someValues = getSomeValues();

console.log(someValues.next()); // yields { value: 1, done: false } 
console.log(someValues.next()); // yields { value: 2, done: false }
console.log(someValues.next()); // yields { value: 3, done: false }
console.log(someValues.next()); // yields { value: 4, done: false }
console.log(someValues.next()); // yields { value: 5, done: false }
console.log(someValues.next()); // yields { value: undefined, done: true }
```


## Promises

Promises provide a cleaner way of handling asynchronous 
functionality in Javascript. When you create a Promise
object, it uses standard methods for handling return 
values along with errors and exceptions.

You will probably recogize a promise object because several APIs
currently use this convention by using `then()` or `success()`
for handling results returned from an asynchronous operation.

Exceptions use the `catch()` functions to handle errors 
that might occur in your promise.

You can declare a promise by passing an executor function
or a closure with `resolve()` and `reject()` functions. 

```javascript
var p = new Promise(function(resolve, reject) { ... });
```
This will provide us a nice cleaner syntax for executing
asynchronous behavior.

```javascript
promise
   .then(function(results) { ... })
   .then(function(results) { ... })
   .then(function(results) { ... })
   .catch(function(err) { ... });
```

Here is an example of a file system operation using standard callbacks

```javascript
"use strict";

var fs = require('fs'),
	rootPath = 'C:\\Users\\dfekke\\Documents\\',
	ext = 'tiff',
	newExt = 'TIF';

fs.readdir(rootPath, 
	function(err, files) {
		if (err) {
			console.error("unable to read directory");
		} else {
			var re = new RegExp("^.*\\." + ext + "$");
			for (var file in files) {
				if (re.test(files[file])) {
					console.log(files[file]);
					var oldPath = rootPath + files[file];
					var newPath = rootPath + files[file].substring(0, files[file].length - ext.length) + newExt;
					console.log(newPath);
					fs.rename(oldPath, 
								newPath, 
								function (err) {
									console.error("unable to rename file");
					});	
				}
			}	
		}
});
```

Now here is an example of the same functionality using Promises
with the [Bluebird](http://bluebirdjs.com/) npm module.

```javascript
"use strict";

var fs = require('fs'),
	Promise = require("bluebird"),
	rootPath = 'C:\\Users\\dfekke\\Documents\\',
	ext = 'tiff',
	newExt = 'TIF';

Promise.promisifyAll(fs);

fs.readdirAsync(rootPath).then((files) => {
	var re = new RegExp("^.*\\." + ext + "$");
	files.forEach(file => {
		if (re.test(file)) {
			console.log(file);
			var oldPath = rootPath + file;
			var newPath = rootPath + file.substring(0, file.length - ext.length) + newExt;
			console.log(newPath);
			fs.renameAsync(oldPath, newPath)
				.catch(err => console.error("unable to rename file") );
		}
	});
}).catch((err) => console.error("unable to read directory"));
```

## Lexical scoping for `this` variable

It is very common when inner functions are used in 
function objects to see new variables declared to pass the
`this` variable because of the way javascript scopes the 
`this` variable.

```javascript
var that = this;
```
Now with ES2015 the `this` variable can be retained if 
you use arrow functions `=>`. This also provides a 
nice shorthand when you need to specify closure or
inner functions.

```javascript
var bob = {
  _name: "Bob",
  _friends: ['Tommy', 'Richard', 'Susan'],
  printFriends() {
	// Here there is no need to hoist the this object because it can be scoped in the lambda.
    this._friends.forEach(f =>
      console.log(`${this._name}  knows  ${f}`));
  }
};

bob.printFriends();
``` 

## ...Spread operator (available in Node 5.0)

The spread operator denoted by three periods at the 
beginning of a array (`...arr`) provides a nice shorthand 
for concatinating arrays together in ES2015. Unfortunately 
this feature did not get put into the language until 
version 4.6 of V8, so we will not see it without 
using Node 5.0 or later.

```javascript
let inner = [3, 4];
let merged = [0, 1, 2, ...inner, 5]; 
```
 

Copyright 2015 JaxNode