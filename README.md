# Repo for the November JaxNode meetup examples.

This repo contains the examples from the JaxNode November 2015 presentation.


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

Copyright 2015 JaxNode