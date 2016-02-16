'use strict';

// Requires
var m           = require('mithril');
var store       = require('./../api/store');

// Controller
function controller(params, done) {
  var scope = {};

  var loadData = function () {
    store.load('cat', 123).then( function (cat) {
      scope.myCat = cat;
      done && done(null, scope);
    });
    store.load('i18n', 10).then( function (i18n) {
      scope.i18n = i18n;
      done && done(null, scope);
    });
  }

  loadData();

  return scope;
}

// View
function view(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1', 'Ohh, another page'),
    m('p', 'try to realod and look to the response'),
    m('a', {
      href: '/',
      config: m.route
    }, 'back to home page'),
    m('p', scope.myCat && ('My cats name is : ' + scope.myCat.name) || ''),
    m('p', scope.i18n && ('My i18n key is : ' + scope.i18n.key) || '')
  ];
}

module.exports = {
  controller: controller,
  view: view
};
