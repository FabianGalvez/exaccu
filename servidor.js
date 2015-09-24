process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express();


//var Comprobante = require('mongoose').model('Comprobante');

//var comprobante = new Comprobante({descripcion: 'Primer Comprobante'});

//comprobante.save();
//Comprobante.find({}, function(err, comprobantes) {
//	if(!err){
//	console.log(comprobantes);
//	}
//);

//require('./rutas/comprobantes.servidor.rutas.js')(app);

app.listen(3000);
module.exports = app;

console.log('Corriendo ');
