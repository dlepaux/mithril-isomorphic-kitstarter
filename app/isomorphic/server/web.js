'use strict';

// Requires
var express = require('express');
var each    = require('lodash').each;
var render  = require('mithril-node-render');

// Get routes
var routes  = require('./../../routes');

// Init Express server
var app = express();
var isFirstLoad = true;

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

// Declare all routes as GET route
each(routes, function(module, route) {
  app.get(route, function(req, res, next) {
    res.type('html');
    function send(scope) {
      res.end(base(render(module.view(scope))));
      scope && scope.onunload && scope.onunload();
    }
    if (module.controller.length < 2 || isFirstLoad) { //sync, response imedeatly
      console.log('i do that');
      isFirstLoad = false;
      return send(module.controller(req.params));
    }
    console.log('not that');
    // async, call with callback
    return module.controller(req.params, function(err, scope) {
      if (err) {
        return next(err);
      }
      send(scope);
    });
  });
});

module.exports = app;
