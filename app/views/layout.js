'use strict';

// Requires
var m      = require('mithril');
var layout = require('./../lib/layout.js');

// Metas
var title = 'Hello layout';
var description = 'Description layout';

// Controller
function controller(params, done) {
  var scope = {
    title: title,
    description: description,
    flash: m.prop('Flash message!')
  };

  done && done(null, scope);

  return scope;
}

// View
function view(scope) {
  return [
    m("#wrapper", scope && scope.content),
  ];
}

module.exports = {
  controller: controller,
  view: view
};
