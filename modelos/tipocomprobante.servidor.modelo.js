var mongoose = require("mongoose");

var TipoComprobanteSchema  = new mongoose.Schema({	
	descripcion : String,	
	creacion : {type: Date, default: Date.now},
});

mongoose.model('TipoComprobante', TipoComprobanteSchema);
