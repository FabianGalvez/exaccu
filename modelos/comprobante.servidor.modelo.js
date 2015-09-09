var mongoose = require("mongoose");

var ComprobanteSchema  = new mongoose.Schema({	
	fecha : Date,	
	descripcion : String,
	
	debito : Number,
	credito : Number,
	usuario : String,
	creacion : {type: Date, default: Date.now},
});

mongoose.model('Comprobante', ComprobanteSchema);
