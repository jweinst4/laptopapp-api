const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  name: {type: String, required: true},
  artist: {type: String},
  description: {type: String},
  itemType: {type: String},
  image: {type: String},
  price: {type: Number}
})

module.exports = mongoose.model('Item', itemSchema)