'use strict';

// Requires
var express = require('express');
var each    = require('lodash').each;
var render  = require('mithril-node-render');
var layout  = require('./../lib/layout.js');

// Get routes
var routes  = require('./../routes');

// Init Express server
var app = express();

// Declare all GET routes
each(routes, function(module, route) {
  app.get(route, function(req, res, next) {
    // Server Side
    // Set HTTP header
    res.type('html');

    // Envoi la réponse
    var send = function (scope) {
      res.end(layout.base(render(module.view(scope)), scope.title, scope.description));
      scope && scope.onunload && scope.onunload();
    }

    // Si le controller de la vue est vide, on genere la vue et on termine le process de réponse serveur
    if (module.controller.length < 2) {
      return send(module.controller(req.params));
    }

    // On exécute le controller de la vue, et on envoi un callback ( done() dans le controller)
    return module.controller(req.params, function(err, scope) {
      if (err) {
        return next(err);
      }
      send(scope);
    });
  });
});

module.exports = app;
