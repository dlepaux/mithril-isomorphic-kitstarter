'use strict';

# Requires
express = require('express')
app = express()
bodyParser = require('body-parser')
store = require('./store')

app.use bodyParser.json()

# Restfull URI
# Global logic
app.all '/:resource/:id?', (req, res, next) ->
  req.resource = req.params.resource
  next()

# show() specific resource
app.get '/:resource/:id', (req, res, next) ->
  if !req.resource
    return next()
  store.load(req.resource, req.params.id).then(res.send.bind(res)).catch next

# index() all resources
app.get '/:resource', (req, res, next) ->
  if !req.resource
    return next()
  store.loadWhere(req.resource, req.query).then(res.send.bind(res)).catch next

# store() a new resource
app.post '/:resource', (req, res, next) ->
  if !req.resource
    return next()
  model = req.body
  model.type = req.resource
  store.save(model).then(res.send.bind(res)).catch next

# update() a resource
app.put '/:resource/:id', (req, res, next) ->
  if !req.resource or !req.params.id
    return next()
  model = req.body
  model.type = req.resource
  model.id = req.params.id
  store.save(model).then(res.send.bind(res)).catch next

# delete() a resource
app.delete '/:resource/:id', (req, res, next) ->
  if !req.resource or !req.params.id
    return next()
  store.destroy(id: req.params.id).then(->
    res.status(200).end()
  ).catch next

module.exports = app