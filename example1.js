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
