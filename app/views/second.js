'use strict';

// Requires
var m           = require('mithril');
var store       = require('./../api/store');

// Controller
function controller(params, done) {
  var scope = {};

  store.load('spa', 'second-page').then( function (d) {
    scope = d;
    console.log(scope);
    done && done(null, scope);
  });

  store.load('cat', 10).then( function (d) {
    scope.myCat = d;
    //console.log(scope);
    //done && done(null, scope);
  });

  store.load('i18n', 10).then( function (d) {
    scope.i18n = d;
    console.log(scope);
    done && done(null, scope);
  });

  return scope;
}

// View
function view(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1.text-center', 'Ohh, another page'),
    m('p', 'try to realod and look to the response'),
    m('a', {
      href: '/',
      config: m.route
    }, 'back to home page'),
    m('p', scope.myCat && ('My cats name is : ' + scope.myCat.name) || ''),
    m('a', {
      href: '/landing/blabla',
      config: m.route
    }, 'go landing'),
    m('p', scope.i18n && ('My i18n key is : ' + scope.i18n.key) || '')
  ];
}

module.exports = {
  controller: controller,
  view: view
};
