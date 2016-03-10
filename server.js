'use strict';

// Requires
var express 	= require('express');
var bodyParser 	= require('body-parser');
var web 		= require('./dist/api/web');
var rest 		= require('./dist/api/rest');
var path   	 	= require('path');
var compression = require('compression');
var request     = require('request');

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

// Proxy
app.use('/api', function(req, res) {
  var url = 'http://dynam.ix/api/i18n/2'+ req.url;
  console.log(url);
  var r = null;
  if(req.method === 'POST') {
    r = request.post({uri: url, json: req.body});
  } else {
    r = request(url);
  }
  console.log(r);
  req.pipe(r).pipe(res);
});

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