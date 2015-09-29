var mongoose = require('mongoose'),
crypto = require('crypto'),
Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	nombre: String,
	apellido: String,
	email: {
			type: String,
			match: [/.+\@.+\..+/, "Ingrese una dirección de correo válida"]
			index: true,
			required: true
	},
	username: {
		type: String,
		trim: true,
		unique: 'Se requiere nombre de usuario,
		required: true
	},
	password: {
		type: String,
		validate: [
			function(password) {
				return password && password.length > 6;
			}, 'Clave de Acceso debe ser mas larga'
		]
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	
	providerId: String,
	providerData: {},

	creacion: {
		type: Date,
		default: Date.now
	}
});


UserSchema.pre('save', function(next) {
	if (this.password) {
		this.salt = new
		Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

UserSchema.methods.hashPassword = function(password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000,64).toString('base64');
};

UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function(username, suffix,callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');
	_this.findOne({
			username: possibleUsername
	}, function(err, user) {
			if (!err) {
				if (!user) {
					callback(possibleUsername);
				} else {
					return _this.findUniqueUsername(username, (suffix || 0) +1, callback);
				}
			} else {
				callback(null);
			}
	});
};

UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});


mongoose.model('Usuario', UsuarioSchema);