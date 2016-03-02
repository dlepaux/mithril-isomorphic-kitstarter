'use strict';

var escape = require('escape-html');
var path   = require('path');
var fs     = require('fs');

function layout(data) {
	return fs.readFileSync(path.join(__dirname, './../views/layout.html'), 'utf8', function (err, string) {
	  	if (err) {
	  		console.log(err);
	  	}
		var matchEscape = string.match(/\{\{\{[\ ]*[a-zA-Z]+[\ ]*\}\}\}/g);
		var match = string.match(/\{\{[\ ]*[a-zA-Z]+[\ ]*\}\}/g);
		
		if (matchEscape) {
			console.log('HELOOOOOOOOOOOOOOOOOOOOO');
			for (var o in data) {
				string = string.replace(match, escape(data[o]));
			}
		} else if (match) {
			console.log('HELOOOOOOOOOOOOOOOOOOOOO');
			// show data
			for (var o in data) {
				string = string.replace(match, data[o]);
			}
		}
		console.log('HELOOOOOOOOOOOOOOOOOOOOO');
		return string;
	});
}

module.exports = {
  'layout': layout
};
