'use strict'

# Requires
m      = require('mithril')
layout = require('./../../lib/layout.js')

# Metas
title = 'Hello layout'
description = 'Description layout'

# Controller
controller = (params, done) ->
  scope = 
    title: title
    description: description
    flash: m.prop('Flash message!')
  done and done(null, scope)
  scope

# View
view = (scope) ->
  [ m('#wrapper', scope and scope.content) ]

module.exports =
  controller: controller
  view: view
