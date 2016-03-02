'use strict'

# Requires
path = require('path')
fs = require('fs')
m = require('mithril')


# Base of app
base = (body, title, description) ->
  title = title or ''
  description = description or ''
  [
    '<!doctype html>'
    '<html>'
    '<head>'
    '<title>' + title + '</title>'
    '<meta name="description" content="' + description + '"/>'
    '<meta charset="utf-8">'
    '<link rel="stylesheet" href="/css/master.css"/>'
    '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>'
    '<script>'
    '(function($) {'
    'var head = document.getElementsByTagName("head").item(0);'
    'var script = document.createElement("script");'
    'script.setAttribute("type", "text/javascript");'
    'script.setAttribute("src", "/index.js");'
    'head.appendChild(script);'
    '})(jQuery);'
    '</script>'
    '</head>'
    '<body>'
    body
    '</body>'
    '</html>'
  ].join ''


# Extend
extend = (layout, datas) ->
  # Get scope of layout
  scope = layout.controller()
  # Merging scope (layout key are overrided by caller)
  for k of datas
    scope[k] = datas[k]
  # Return view of layout with combined scope
  layout.view scope


# Update meta title
updateTitle = (text) ->
  if typeof document != 'undefined'
    head = document.getElementsByTagName('head')
    title = head[0].getElementsByTagName('title')
    console.log text
    title[0].innerHTML = text


# Update meta description
updateDescription = (text) ->
  if typeof document != 'undefined'
    head = document.getElementsByTagName('head')
    metas = head[0].getElementsByTagName('meta')
    i = 0
    while i < metas.length
      if metas[i].getAttribute('name') == 'description'
        return metas[i].setAttribute('content', text)
      i++

module.exports =
  base: base
  extend: extend
  updateTitle: updateTitle
  updateDescription: updateDescription
