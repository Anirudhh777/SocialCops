var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express();
var $ = jQuery = require('jquery');
require('./client/js/jquery.csv.js');
// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
require('./server/config/routes.js')(app);
app.listen(8990, function() {
  console.log('cool stuff on: 8990');
});