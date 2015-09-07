var config = require('./env/development');
var mongoose = require('mongoose');
module.exports = function(){
	var db = mongoose.connect(config.db);

	require('./modelos/comprobante.server.model');
	
	return db;
};