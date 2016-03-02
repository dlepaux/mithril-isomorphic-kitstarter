'use strict';

var path   = require('path');
var fs     = require('fs');
var m      = require('mithril');

// Base of app
function base(body, title, description) {
  title = title || '';
  description = description || '';

  return [
    '<!doctype html>',
    '<html>',
      '<head>',
        '<title>' + title + '</title>',
        '<meta name="description" content="' + description + '"/>',
        '<meta charset="utf-8">',
        '<link rel="stylesheet" href="/css/master.css"/>',
        '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>',
        '<script>',
          '(function($) {',
            'var head = document.getElementsByTagName("head").item(0);',
            'var script = document.createElement("script");',
            'script.setAttribute("type", "text/javascript");',
            'script.setAttribute("src", "/index.js");',
            'head.appendChild(script);',
          '})(jQuery);',
        '</script>',
      '</head>',
      '<body>',
        body,
      '</body>',
    '</html>'
  ].join('');
}

// Extend
function extend(layout, datas) {
  // Get scope of layout
  var scope = layout.controller();
  // Merging scope (original key are overrided by caller)
  for (var k in datas) {
    scope[k] = datas[k];
  }
  // Return view of layout with combined scope
  return layout.view(scope);
}

// Update meta title
function updateTitle(text) {
  if (typeof(document) != 'undefined') {
    var head = document.getElementsByTagName('head'),
        title = head[0].getElementsByTagName('title');
    title[0].innerHTML = text;
  }
}
// Update meta description
function updateTitle(text) {
  if (typeof(document) != 'undefined') {
    var head = document.getElementsByTagName('head'),
        metas = head[0].getElementsByTagName('meta');

    for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("name") == "description") { 
         return metas[i].setAttribute("content", text); 
      } 
    } 
  }
}

module.exports = {
  base: base,
  extend: extend,
  updateTitle: updateTitle,
};
