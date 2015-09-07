var mongoose = require("mongoose");

var ComprobanteSchema  = new mongoose.Schema({
	descripcion : String,
	fecha : Date,
	creacion : {type: Date, default: Date.now},
	debito : Number,
	credito : Number,
	usuario : String
});

mongoose.model('Comprobante', ComprobanteSchema);
