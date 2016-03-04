'use strict';

// Requires
var express 	= require('express');
var bodyParser 	= require('body-parser');
var web 		= require('./dist/api/web');
var rest 		= require('./dist/api/rest');
var path   	 	= require('path');
var compression = require('compression');

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

// Join public rep to use css, img, etc
app.use(express.static(path.join(__dirname, 'public')));
// Set PORT
var port = process.env.PORT || 80;
console.log('Server is now running on port ' + port);
// Listen PORT
app.listen(port);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});