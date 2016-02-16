'use strict';

var home = require('./views/home');
var second = require('./views/second.js');

module.exports = {
  '/': home,
  '/second-page': second
};
