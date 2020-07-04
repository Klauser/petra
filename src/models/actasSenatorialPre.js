const mongoose = require('mongoose');
const { Schema } = mongoose;

const actasSenatorialPreSchema = new Schema({
    centro: {type: String, required: true},
    municipio: {type: String, required: true},
    colegio: {type: String, required: true},
    votos: {type: Object, required: true},
    votosValidos: {type: Number, required: true},
    votosNulos: {type: Number, required: true},
    votosEmitidos: {type: Number, required: true},
    boletasObservadas: {type: Number, required: true},
    digitador: {type: String, required: true}
});

module.exports = mongoose.model('ActasSenatorialPre', actasSenatorialPreSchema);