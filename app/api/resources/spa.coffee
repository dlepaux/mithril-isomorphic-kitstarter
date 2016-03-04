'use strict'

# Requires
Promise = require('promise')
i18n = require('./i18n.js')
cat = require('./cat.js')

# Export data loaded
module.exports = spa: get: (id) ->
  new Promise((resolve) ->
    scope = {}
    cat.cat.get(10).then (cat) ->
      scope.myCat = cat
    i18n.i18n.get(10).then (i18n) ->
      scope.i18n = i18n
      resolve scope
)