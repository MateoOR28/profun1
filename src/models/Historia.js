const mongoose = require('mongoose');
const { Schema } = mongoose;

const HistoriaSchema= new Schema({
    nombre: {type: String, required: true},
    apellido:{type: String, required: true},
    identificacion:{type: String, required: true},
    correo:{type: String, required: true},
    agudezaD:{type: String, required: true},
    agudezaI:{type: String, required: true},
    biomicroscopiaD:{type: String, required: true},
    biomicroscopiaI:{type: String, required: true},
    fondoD:{type: String, required: true},
    fondoI:{type: String, required: true},
    descripcion:{type: String, required: true},
    date:{type: Date, default: Date.now}
})

module.exports =mongoose.model('Historia',HistoriaSchema)