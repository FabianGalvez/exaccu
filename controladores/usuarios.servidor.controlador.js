
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

exports.leer = function(req, res) {
	res.json(req.usuario);
};

exports.usuarioPorID = function(req, res, next, id) {
	
	Usuario.findOne({
		_id: id
	}, function(err, usuario) {
		if (err) {
			return next(err);
		} else {
			req.usuario = usuario;
			next();
		}
	});
};

exports.actualizar = function(req, res, next) {
	Usuario.findByIdAndUpdate(req.usuario.id, req.body, function(err, usuario) {
		if (err) {
			return next(err);
		} else {
			res.json(usuario);
		}
	});
};

exports.borrar = function(req, res, next) {
	req.usuario.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.usuario);
		}
	})
};