'use strict';

// Requires
var express 	= require('express');
var bodyParser 	= require('body-parser');
var web 		= require('./app/isomorphic/server/web');
var rest 		= require('./app/isomorphic/server/rest');
var path   	 	= require('path');
var compression = require('compression');
var browserify  = require('browserify-middleware');

// DB
var db  		= require('./app/models');

// Init Server
var app = express();

// Make Database accessible
app.use(function(req,res,next){
    req.db = db;
    next();
});

// Set parameters
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(compression());
app.use(web);
app.use('/api/v1', rest);
app.get('/index.js', browserify('./app/isomorphic/client/index.js'));
app.use(express.static(path.join(__dirname, 'public')));


var port = process.env.PORT || 80;
console.log('Server is now running on port ' + port);
app.listen(port);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});