const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  name: {type: String, required: true},
  artist: {type: String},
  description: {type: String},
  itemType: {type: String},
  image: {type: String, default: "https://i.imgur.com/hz09qTy.png?1", required:true},
  price: {type: Number}
})

module.exports = mongoose.model('Item', itemSchema)