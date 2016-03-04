"use strict"

# Requires
m      = require('mithril')
store  = require('./../api/store')
layout = require('./../lib/layout.js')

# Metas
title = 'Hello second page'
description = 'Description second page'

# Controller
controller = (params, done) ->
  scope = 
    title: title
    description: description

  store.load('spa', 'second').then (data) ->
    scope[k] = data[k] for k of data
    done and done(null, scope)

  return scope

# View
view = (scope) ->
  if scope
    layout.updateTitle title
    layout.updateDescription description
  layout.extend require('./layout.js'),
    content: [
      m.trust('<!-- Server side rendering \\o/ -->')
      m('h1.text-center', 'Ohh, another page')
      m('p', 'try to realod and look to the response')
      m('a', {
        href: '/'
        config: m.route
      }, 'back to home page')
      m('p', scope.myCat and 'My cats name is : ' + scope.myCat.name or '')
      m('a', {
        href: '/landing/blabla'
        config: m.route
      }, 'go landing')
      m('p', scope.i18n and 'My i18n key is : ' + scope.i18n.key or '')
    ]
    modal: [ m('div', 'modal2') ]


module.exports =
  controller: controller
  view: view
