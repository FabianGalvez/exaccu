var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: String,
	apellido: String,
	email: String,
	username: {
		type: String,
		trim: true
	},
	password: String,
	creacion: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Usuario', UsuarioSchema);