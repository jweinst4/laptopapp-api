const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  image: {type: String, default: "https://i.imgur.com/hz09qTy.png?1"}
})

module.exports = mongoose.model('Item', itemSchema)