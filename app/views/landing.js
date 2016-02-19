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

  if ( ! params && ! done) {
    $.get("/proxy?url=www.google.com", function(response) { 
      scope.data = response;
      done && done(null, scope);
    });
  } else {
    done && done(null, scope);
  }


  return scope;
}

// View
function view(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1', scope.id),
    m.trust(scope.data)
  ];
}

module.exports = {
  controller: controller,
  view: view
};
