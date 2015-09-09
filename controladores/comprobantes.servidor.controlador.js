var Comprobante = require('mongoose').model('Comprobante');

exports.crear = function(req, res, next) {
	
	var comprobante = new Comprobante(req.body);
	
	comprobante.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(comprobante);
		}
	});
};
	
exports.lista = function(req, res, next) {
	
	Comprobante.find({}, function(err, comprobantes) {
		if (err) {
			return next(err);
		} else {
			res.json(comprobantes);
		}
	});
};

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].
				message;
		}
	} else {
		return 'Error desconcodio MongoDb';
	}
};