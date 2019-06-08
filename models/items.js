const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  name: {type: String, required: true},
  artist: {type: String, required: true},
  description: {type: String, required: true},
  itemType: {type: String, required: true},
  image: {type: String, required:true},
  price: {type: Number, required: true}
})

module.exports = mongoose.model('Item', itemSchema)