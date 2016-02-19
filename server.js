'use strict';

// Requires
var express 	= require('express');
var bodyParser 	= require('body-parser');
var web 		= require('./app/api/web');
var rest 		= require('./app/api/rest');
var path   	 	= require('path');
var compression = require('compression');
var browserify  = require('browserify-middleware');
var proxy   = require('express-http-proxy');


// Init Server
var app = express();

// Set parameters
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(compression());

// Déclaration des routes, HTTP header, etc
app.use(web);
// API
app.use('/api/v1', rest);
// Build index.js with browserify
app.get('/index.js', browserify('./app/index.js'));
// Join public rep to use css, img, etc
app.use(express.static(path.join(__dirname, 'public')));
// Set PORT
var port = process.env.PORT || 80;
console.log('Server is now running on port ' + port);
// Listen PORT
app.listen(port);

//
app.get('/proxy', function(req, res, next) {
  proxy('www.google.com', {
    forwardPath: function(req, res) {
      console.log(res);
      console.log(req);
      return require('url').parse(req.url).path;
    }
  })
});


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});