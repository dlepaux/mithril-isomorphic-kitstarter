'use strict';

var home = require(global.view_path() + 'home');
var second = require(global.view_path() + 'second');

module.exports = {
  '/': home,
  '/second-page': second
};
