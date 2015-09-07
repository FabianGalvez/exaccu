var comprobantes = require('../controllers/comprobantes.server.controller');

module.exports = function(app) {
	app.route('/comprobantes')
		.post(comprobantes.crear)
		.get(comprobantes.lista);
};