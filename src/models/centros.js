const mongoose = require('mongoose');
const { Schema } = mongoose;

const centroSchema = new Schema({
    nombre: {type: String, required: true},
    municipio: {type: String, required: true},
    zona: {type: String, required: true},
    colegios: {type: Array, required: true}
})

module.exports = mongoose.model('Centro', centroSchema);