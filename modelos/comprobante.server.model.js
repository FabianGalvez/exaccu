var mongoose = require("mongoose");

var comprobanteSquema  = new mongoose.Squema({
	descripcion : String,
	fecha : Date
	creacion : {type: Date, default: Date.now},
	debito : Number,
	credito : Number,
	usuario : String
});

mongoose.model ('Comprobante', comprobanteSquema);
