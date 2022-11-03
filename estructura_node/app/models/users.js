const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number
    },
    email:{
      type: String
    }
  },
  {
    timestamps: true, // Tener propiedades de fecha de creacion y actualizacion 
    versionKey: false // Vesion de dato en mongo
  }
)

module.exports = mongoose.model('user', UserScheme)