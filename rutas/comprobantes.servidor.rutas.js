var comprobantes = require('../controladores/comprobantes.servidor.controlador');

module.exports = function(app) {
	app.route('/comprobantes')
		.post(comprobantes.crear)
		.get(comprobantes.lista);
};