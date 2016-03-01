'use strict';

var escape = require('escape-html');
var path   = require('path');
var fs     = require('fs');

function layout(data) {
	console.log(path.join(__dirname, './../views/layout.html'));
	fs.readFileSync(path.join(__dirname, '../views/layout.html'), 'utf8', (err, string) => {
	  	if (err) {
	  		console.log(err);
	  	}
		console.log(data);
		var matchEscape = string.match(/\{\{\{[\ ]*[a-zA-Z]+[\ ]*\}\}\}/g);
		var match = string.match(/\{\{[\ ]*[a-zA-Z]+[\ ]*\}\}/g);
		
		if (matchEscape) {
			for (var o in data) {
				string = string.replace(match, escape(data[o]));
			}
		} else if (match) {
			// show data
			for (var o in data) {
				string = string.replace(match, data[o]);
			}
		}
		console.log(string);
		return string;
	});
}

module.exports = {
  'layout': layout
};
