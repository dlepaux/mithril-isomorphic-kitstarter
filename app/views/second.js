'use strict';

var m       = require('mithril');
var store   = require('../isomorphic/store');
var m       = require('mithril');

// DB
//var db      = require('./../models');


function controller(req, done) {
  var scope = {};

  store.load('dog', 123).then( function (dog) {
    scope.myDog = dog;
    //done && done(null, scope);
  });

  store.load('i18n', 10).then( function (i18n) {
    scope.i18n = i18n;
    done && done(null, scope);
  });

  //console.log(req.db);
  //console.log(req.db ? 'connected' : 'not connected');

  /*db.i18n.findById(10).then( function (i18n) {
    scope.i18n = i18n.key;
  });*/

  /*router.get('/', function(req, res) {
    models.I18n.findAll().then( function (i18ns) {
      scope.i18ns = i18ns;
      done && done(null, scope);
    });
  });*/
  return scope;
}

function view(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1', 'Ohh, another page'),
    m('p', 'try to realod and look to the response'),
    m('a', {
      href: '/',
      config: m.route
    }, 'back to home page'),
    m('p', scope.myDog && ('My dogs name is : ' + scope.myDog.name) || ''),
    m('p', scope.i18n && ('My I18n key is : ' + scope.i18n.key) || '')
  ];
}

module.exports = {
  controller: controller,
  view: view
};
