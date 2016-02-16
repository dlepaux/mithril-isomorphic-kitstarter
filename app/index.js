'use strict';

// Requires
if (global.document) {
  require('es6-promise').polyfill();
}
var domready = require('domready');
var m 		 = require('mithril');

// Get routes
var routes = require('./routes');
// Define route style, (pathname|hash|search)
m.route.mode = 'pathname';
// Define routes when DOM Ready
domready(function() {
  global.htmlLoaded = document.body.innerHTML;
  m.route(document.body , '/', routes);
});
