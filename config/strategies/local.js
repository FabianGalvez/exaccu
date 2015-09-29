var passport = require('passport'),

LocalStrategy = require('passport-local').Strategy,

User = require('mongoose').model('Usuario');

module.exports = function() {
	passport.use(new LocalStrategy(function(username, password, done) {
		User.findOne({
			username: username
		}, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, {
					message: 'Usuario no existe'
				});
			}
			if (!user.authenticate(password)) {
				return done(null, false, {
					message: 'Clave incorrecta'
				});
			}	
			
			return done(null, user);
		});
	}));
};