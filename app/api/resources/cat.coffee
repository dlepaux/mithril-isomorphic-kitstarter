'use strict'

# Requires
Promise = require('promise')

module.exports = cat: get: (id) ->
  new Promise((resolve) ->
    resolve
      id: id
      name: 'Kitty'
    return
)