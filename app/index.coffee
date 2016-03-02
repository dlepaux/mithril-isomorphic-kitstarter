'use strict';

# Requires
if global.document
  require('es6-promise').polyfill()
domready = require('domready')
m = require('mithril')

# Get routes
routes = require('./routes')
# Define route style, (pathname|hash|search)
m.route.mode = 'pathname'
# Define routes when DOM Ready
domready ->
  global.htmlLoaded = document.body.innerHTML
  m.route document.body, '/', routes
  return
