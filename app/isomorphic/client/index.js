'use strict';

// Requires
if (global.document) {
  require('es6-promise').polyfill();
}
var domready = require('domready');
var m 		 = require('mithril');

// Get routes
var routes = require('./../../routes');

m.route.mode = 'pathname';

domready(function() {
  m.route(document.body , '/', routes);
});
