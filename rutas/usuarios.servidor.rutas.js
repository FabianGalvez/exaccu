var usuarios = require('./../controladores/usuarios.servidor.controlador');

module.exports = function(app) {
	app.route('/usuarios')
		.post(usuarios.crear)
		.get(usuarios.listar);
		
	app.route('/usuarios/:usuarioId')
		.get(usuarios.leer)
		.put(usuarios.actualizar)
		.delete(usuarios.borrar);
	
	app.param('usuarioId', usuarios.usuarioPorID);
};