'use strict';

# Requires
cat = require('./resources/cat')
i18n = require('./resources/i18n')
spa = require('./resources/spa')

for o of cat
  spa[o] = cat[o]

for o of i18n
  spa[o] = i18n[o]

module.exports = spa