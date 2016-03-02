'use strict';

home = require('./views/home')
second = require('./views/second.js')
landing = require('./components/landing/landing.js')

module.exports =
  '/': home
  '/second-page': second
  '/landing/:landingSlug': landing