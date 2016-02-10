'use strict';

var express 	= require('express');
var bodyParser 	= require('body-parser');
var web 		= require('./app/js/server/web');
var rest 		= require('./app/js/server/rest');
var path   	 	= require('path');
// Optimize HTML ?
var compression = require('compression');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(compression());
app.use(web);
app.use('/api/v1', rest);
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 80;
console.log('Server is now running on port ' + port);
app.listen(port);
