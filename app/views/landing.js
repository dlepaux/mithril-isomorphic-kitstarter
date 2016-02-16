'use strict';

// Requires
var m           = require('mithril');

// Controller
function controller(params, done) {
  var scope = {};

  if (params) {
    scope.id = params.landingSlug;
  } else {
    scope.id = m.route.param("landingSlug");
  }
  done && done(null, scope);


  return scope;
}

// View
function view(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1', scope.id)
  ];
}

module.exports = {
  controller: controller,
  view: view
};
