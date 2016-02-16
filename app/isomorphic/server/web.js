'use strict';

// Requires
var express = require('express');
var each    = require('lodash').each;
var render  = require('mithril-node-render');

// Get routes
var routes  = require(global.app_path() + 'routes');

// Init Express server
var app = express();

function base(content) {
  return [
    '<!doctype html>',
    '<html>',
      '<head>',
        '<title>isomorphic mithril application</title>',
        '<meta charset="utf-8">',
        '<script src="/index.js"></script>',
      '</head>',
      '<body>',
        content,
      '</body>',
    '</html>'
  ].join('');
}

// Declare all GET routes
each(routes, function(module, route) {
  app.get(route, function(req, res, next) {
    // Server Side
    // Set HTTP header
    res.type('html');

    // Envoi la réponse
    var send = function (scope) {
      res.end(base(render(module.view(scope))));
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
