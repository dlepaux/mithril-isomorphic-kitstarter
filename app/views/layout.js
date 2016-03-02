'use strict';

var m = require('mithril');

function controller(params, done) {
  var scope = {};

  // <title> of page
  this.title = m.prop(params && params.title || 'title');
  this.flash = m.prop('Flash message!');
  this.scripts = [];
  this.sections = [];

  this.addScript = function(url) {
    this.scripts.push(url);   
  }

  this.addSection = function(scope, view) {
    scope.view = view;
    this.sections.push(scope);
  }

  return scope;
}

function view(scope) {
  return [
    m("head", [
      m("title", scope && scope.title()),
      m("link", {rel: "stylesheet", type: "text/css", href: "/css/master.css"}),
      m("script", {type: "text/javascript", src: "//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"}),
      m("script", {type: "text/javascript"}, '(function($) {var head = document.getElementsByTagName("head").item(0);var script = document.createElement("script");script.setAttribute("type", "text/javascript");script.setAttribute("src", "/index.js");head.appendChild(script);})(jQuery);'),
      scope && scope.scripts.map(function(script) {
        return m("script", {type: "text/javascript", src: script})
      })
    ]),
    m("body", [
      m("#wrapper", [
        m("div.flash", scope && scope.flash()),
        m("div#app", scope && scope.sections.map(function(section){
          return section.view(section)
        }))        
      ], scope && scope.content)
    ])  
  ];
}

module.exports = {
  controller: controller,
  view: view
};
