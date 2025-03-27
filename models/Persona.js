const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    edad: String
  });

module.exports = mongoose.model('Persona', PersonaSchema);
