'use strict';

var home 	= require('./views/home');
var second 	= require('./views/second.js');
var landing = require('./components/landing/landing.js');

module.exports = {
  '/': home,
  '/second-page': second,
  '/landing/:landingSlug': landing
};
