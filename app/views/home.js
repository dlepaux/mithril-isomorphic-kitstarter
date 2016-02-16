'use strict';

// Requires
var m = require('mithril');

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
function controller(params) {
  if ( ! params) {
    global.isFirstLoad = false;
  }
}

// View
function view() {
  return [
    m('h1.text-center', 'Mithril Isomorphic - KitStarter'),
    m('h2', 'Features'),
    m("ul", features.map( function(feature) {
      return m("li", feature)
    })),
    m('a', {
      href: '/second-page',
      config: m.route
    }, 'second page')
  ];
}

module.exports = {
  controller: controller,
  view: view
};
