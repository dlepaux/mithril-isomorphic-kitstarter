'use strict';

Promise = require('promise')
db = require('./../../models')

module.exports = i18n: get: (id) ->
  new Promise((resolve) ->
    db.sequelize.query('SELECT * FROM i18n WHERE i18n.id = ' + id).spread (results, metadata) ->
      # Each record will now be mapped to the project's DAO-Factory.
      key = results[0].key
      resolve results[0]
      return
    return
)