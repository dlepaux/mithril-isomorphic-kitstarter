'use strict'

# Requires
resources = require('./../resources.js')

load = (type, id) ->
  if !resources[type]
    throw Error('Resource with type "' + type + '" does not exist')
  resources[type].get id

loadWhere = (type, query) ->
  if !resources[type]
    throw Error('Resource with type "' + type + '" does not exist')
  resources[type].query query

remove = (model) ->
  if !model.type
    throw new Error('model has no type, remove not possible')
  resources[model.type].destroy model.id

save = (model) ->
  if !model.type
    throw new Error('model has no type, save not possible')
  resources[model.type].save model

module.exports =
  save: save
  load: load
  remove: remove
  loadWhere: loadWhere
