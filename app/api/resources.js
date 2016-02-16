'use strict';

var cat = require('./resources/cat');
var i18n = require('./resources/i18n');
var spa = require('./resources/spa');

for (var attrname in cat) { spa[attrname] = cat[attrname]; }
for (var attrname in i18n) { spa[attrname] = i18n[attrname]; }

module.exports = spa;