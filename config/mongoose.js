var config = require('./env/development');
var mongoose = require('mongoose');

module.exports = function(){
	
	var db = mongoose.connect(config.db);
            
	db.connection.on('error', function (err){
		console.log(err);
	});
	
	require('./../modelos/usuario.servidor.modelo.js');
	
	return db;
};

