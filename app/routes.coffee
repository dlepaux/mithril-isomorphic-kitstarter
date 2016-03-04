'use strict';

home = require('./components/page/home')
second = require('./components/page/second.js')
landing = require('./components/landing/landing.js')

module.exports =
  '/': home
  '/second-page': second
  '/landing/:landingSlug': landing