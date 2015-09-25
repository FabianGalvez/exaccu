var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: String,
	apellido: String,
	email: {
			type: String,
			index: true,
			required: true
	},
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: String,
	creacion: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Usuario', UsuarioSchema);