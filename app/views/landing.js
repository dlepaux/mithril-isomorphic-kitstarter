'use strict';

// Requires
var m           = require('mithril');
var proxy   = require('express-http-proxy');
var express = require('express');


app.use('/proxy', proxy('www.google.com', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  },
  intercept: function(rsp, data, req, res, callback) {
   // rsp - original response from the target
   data = JSON.parse(data.toString('utf8'));
   callback(null, JSON.stringify(data));
  },
}));

// Controller
function controller(params, done) {
  var scope = {};

  if (params) {
    scope.id = params.landingSlug;
  } else {
    scope.id = m.route.param("landingSlug");
  }

  if ( ! params && ! done) {
    $.get("/proxy", function(response) { 
      scope.data = response;
      done && done(null, scope);
    });
  } else {
    done && done(null, scope);
  }


  return scope;
}

// View
function view(scope) {
  return [
    m.trust('<!-- Server side rendering \\o/ -->'),
    m('h1', scope.id),
    m.trust(scope.data)
  ];
}

module.exports = {
  controller: controller,
  view: view
};
