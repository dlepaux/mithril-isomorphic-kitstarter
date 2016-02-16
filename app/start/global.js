'use strict';

// Requires
var path = require('path');

// App path
global.app_path = function () {
	return __dirname + '/../';
};

// View path
global.view_path = function () {
	return __dirname + '/../views/';
};