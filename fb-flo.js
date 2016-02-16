'use strict';

var flo = require('fb-flo'),
    path = require('path'),
    fs = require('fs');

var server = flo(
  '../',
  {
    port: 7331,
    host: 'localhost',
    verbose: false,
    glob: [
      'public/js/*.js',
      'public/css/*.css',
      'app/views/**/*.php'
    ]
  }, resolver);

  server.once('ready', function() {
    console.log('Ready!');
  });
  
  function resolver(filepath, callback) {
    console.log(filepath + " has just been updated");
    // reload si kle fichier n'est pas .css ou .js
    var isToReload = !filepath.match(/\.(css|js)$/);
    callback({
      // On retire /public/ de l'url si le fichier est .css ou .js
      resourceURL: (!isToReload?filepath.substr(7):filepath),
      // Realod hard page     
      reload: isToReload,
      // On a ajouté ../ pour remonter dans les sources (assets)
      contents: fs.readFileSync('../' + filepath),
      update: function(_window, _resourceURL) {
        // this function is executed in the browser, immediately after the resource has been updated with new content
        // perform additional steps here to reinitialize your application so it would take advantage of the new resource
        console.log("Resource " + _resourceURL + " has just been updated with new content");
      }
    });
  }