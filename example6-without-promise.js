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
