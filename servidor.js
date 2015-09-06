var express = require('express');
var mongoose = require('./config/mongoose');
//var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public')); 

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Corriendo en  http://%s:%s', host, port);
});