'use strict';

var cat = require('./resources/cat');
var i18n = require('./resources/i18n');

for (var attrname in cat) { i18n[attrname] = cat[attrname]; }

module.exports = i18n;