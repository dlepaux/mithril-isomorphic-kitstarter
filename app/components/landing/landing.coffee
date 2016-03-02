'use strict'
# Requires
m = require('mithril')

# Controller
controller = (params, done) ->
  scope = {}
  if params
    scope.id = params.landingSlug
  else
    scope.id = m.route.param('landingSlug')
  if !params and !done
    done and done(null, scope)
  else
    done and done(null, scope)
  scope

# View
view = (scope) ->
  [
    m.trust('<!-- Server side rendering \\o/ -->')
    m('h1', scope.id)
    m.trust(scope.data)
  ]

module.exports =
  controller: controller
  view: view
