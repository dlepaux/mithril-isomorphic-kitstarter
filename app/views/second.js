'use strict';

// Requires
var m           = require('mithril');
var mTrustLink  = require('mithril-trust-link');
var store       = require('../isomorphic/store');

// Controller
function controller(params, done) {
  var scope = {};

  var loadData = function () {
    store.load('dog', 123).then( function (dog) {
      scope.myDog = dog;
      done && done(null, scope);
    });
    /*store.load('i18n', 10).then( function (i18n) {
      scope.i18n = i18n;
      done && done(null, scope);
    });*/
  }

  // Côté client, on ne va pas exécuter ce controlleur avec des paramètres, donc si il n'existe pas on est côté client
  if ( ! params && ! done && global.isFirstLoad) {
      done && done(null, scope);
      global.isFirstLoad = false;
      //console.log(global.htmlLoaded);
      //
  } else {
    loadData();
  }

  return scope;
}

// View
function view(scope) {
  console.log();
  if (global.isFirstLoad) {
    global.isFirstLoad = false;
    return mTrustLink.convert(global.htmlLoaded)
  } else {
    return [
      m.trust('<!-- Server side rendering \\o/ -->'),
      m('h1', 'Ohh, another page'),
      m('p', 'try to realod and look to the response'),
      m('a', {
        href: '/',
        config: m.route
      }, 'back to home page'),
      m('p', scope.myDog && ('My dogs name is : ' + scope.myDog.name) || ''),
      m('p', scope.i18n && ('My i18n key is : ' + scope.i18n.key) || '')
    ];
  }
}

module.exports = {
  controller: controller,
  view: view
};
