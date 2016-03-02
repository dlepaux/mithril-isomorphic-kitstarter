'use strict'

# Requires
extend = require('lodash').extend
m = require('mithril')

apiUrl = (type) ->
  '/api/v1/' + type

save = (instance) ->
  data = instance
  if !instance.type
    throw new Error('no type provided to save model')
  m.request(
    method: if instance.id then 'PUT' else 'POST'
    url: apiUrl(instance.type) + (if instance.id then '/' + instance.id else '')
    data: data).then (result) ->
    extend instance, result

load = (type, id) ->
  if !type
    throw new Error('no type provided to load model')
  if !id
    throw new Error('no id provided to load model')
  m.request
    method: 'GET'
    url: apiUrl(type + '/' + id)

remove = (instance) ->
  if !instance
    throw new Error('no instance given to remove')
  if !instance.type
    throw new Error('no type provided to remove instance')
  if !instance.id
    throw new Error('no id provided to remove instance')
  m.request
    method: 'DELETE'
    url: apiUrl(instance.type + '/' + instance.id)

loadWhere = (type, query) ->
  if !type
    throw new Error('no type provided to load model')
  m.request
    method: 'GET'
    url: apiUrl(type)
    data: query

module.exports =
  save: save
  load: load
  loadWhere: loadWhere
  remove: remove
