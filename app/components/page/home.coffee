'use strict'

# Requires
m      = require('mithril')
path   = require('path')
layout = require('./../../lib/layout.js')

# Metas
title = 'Hello first page'
description = 'Description first page'

# Features
features = [
  'Friendly Arborescence'
  'Brunch builder'
  'Express'
  'Mithril'
  'MySQL driver'
  'Sequilize ORM'
  'Mithril'
  'Foundation'
]

# Controller
controller = (params, done) ->
  scope = 
    title: title
    description: description
  done and done(null, scope)
  scope

# View
view = (scope) ->
  if scope
    layout.updateTitle title
    layout.updateDescription description
  layout.extend require('./layout.js'),
    content: [
      m('h1.text-center', 'Mithril Isomorphic - KitStarter')
      m('h2', 'Features')
      m('ul', features.map((feature) ->
        m 'li', feature
      ))
      m('a', {
        href: '/second-page'
        config: m.route
      }, 'second page')
    ]
    modal: [ m('div', 'modal') ]


module.exports =
  controller: controller
  view: view
