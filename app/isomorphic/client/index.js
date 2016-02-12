'use strict';

// Requires
if (global.document) {
  require('es6-promise').polyfill();
}
global.isFirstLoad = true;

var domready = require('domready');
var m 		 = require('mithril');

// Get routes
var routes = require('./../../routes');
// Define route style, (pathname|hash|search)
m.route.mode = 'pathname';
// Define routes when DOM Ready
/*domready(function() {
  m.route(document.body , '/', routes);
});*/
