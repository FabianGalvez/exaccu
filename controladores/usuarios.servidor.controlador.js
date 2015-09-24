
var Usuario = require('mongoose').model('Usuario');

exports.crear = function(req, res, next) {
	
	console.log(req.body);
	
	var usuario = new Usuario(req.body);
	
	usuario.save(function(err) {
		if (err) {
			return next(err);
		} else {			
			res.json(usuario);
		}
	});
};

exports.listar = function(req, res, next) {
	Usuario.find({}, function(err, usuarios) {
		if (err) {
			return next(err);
		} else {
			res.json(usuarios);
		}
	});
};