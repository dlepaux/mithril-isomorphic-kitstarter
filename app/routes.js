'use strict';

var home = require('./views/home');
var second = require('./views/second');

module.exports = {
  '/': home,
  '/second-page': second
};
