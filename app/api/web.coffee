'use strict';

# Requires
express = require('express')
each = require('lodash').each
render = require('mithril-node-render')
layout = require('./../lib/layout.js')

# Get routes
routes = require('./../routes')

# Init Express server
app = express()

# Declare all GET routes
each routes, (module, route) ->
  app.get route, (req, res, next) ->
    # Envoi la réponse
    send = (scope) ->
      res.end layout.base(render(module.view(scope)), scope.title, scope.description)
      scope and scope.onunload and scope.onunload()
    
    # Server Side
    # Set HTTP header
    res.type 'html'
    # Si le controller de la vue est vide, on genere la vue et on termine le process de réponse serveur
    if module.controller.length < 2
      return send(module.controller(req.params))
    # On exécute le controller de la vue, et on envoi un callback ( done() dans le controller)
    return module.controller(req.params, (err, scope) ->
      if err
        return next(err)
      send scope
    )


module.exports = app
