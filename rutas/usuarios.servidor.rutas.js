var usuarios = require('./../controladores/usuarios.servidor.controlador');

module.exports = function(app) {
	app.route('/usuarios')
		.post(usuarios.crear)
		.get(usuarios.listar);
};