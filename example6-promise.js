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