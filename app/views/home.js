'use strict';

// Requires
var m      = require('mithril');
var path   = require('path');
var layout = require('./../lib/layout.js');

// Metas
var title = 'Hello first page';
var description = 'Description first page';

// Features
var features = [
  "Friendly Arborescence",
  "Brunch builder",
  "Express",
  "Mithril",
  "MySQL driver",
  "Sequilize ORM",
  "Mithril",
  "Foundation"
];


// Controller
function controller(params, done) {
  var scope = {
    title: title,
    description: description
  };

  done && done(null, scope);

  return scope;
}

// View
function view(scope) {
  if ( ! scope) {
    console.log('update');
    layout.updateTitle(title);
  } else {

  }
  return layout.extend(require('./layout.js'), {
    content: [
      m('h1.text-center', 'Mithril Isomorphic - KitStarter'),
      m('h2', 'Features'),
      m("ul", features.map( function(feature) {
        return m("li", feature)
      })),
      m('a', {
        href: '/second-page',
        config: m.route
      }, 'second page')
    ],
    modal: [
      m('div', 'modal')
    ]}
  );
}

module.exports = {
  controller: controller,
  view: view
};
