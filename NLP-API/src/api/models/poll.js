const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  //Titulo de la pregunta
  title: {
    type: String,
    required: true,
  },
  //usuarios que respondieron y su respuesta
  answers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      response: {
        type: String,
        required: true,
      },
      created: {
        type: Date,
        default: Date.now,
      },
      score: {
        type: Number,
        required: true,
      },
      magnitude: {
        type: Number,
        required: true,
      },
    },
  ],
  //usuario que creo la encuesta
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  //Cuando fue creado
  created: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Question', questionSchema)
