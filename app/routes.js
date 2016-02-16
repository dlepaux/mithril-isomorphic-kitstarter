'use strict';

var home 	= require('./views/home');
var second 	= require('./views/second.js');
var landing = require('./views/landing.js');

module.exports = {
  '/': home,
  '/second-page': second,
  '/landing/:landingSlug': landing
};
