const express = require('express')
const items = express.Router()
const Item = require('../models/items.js')

items.post('/', async (req, res) => {
  Item.create(req.body, (error, createdItem) => {
    if (error) {
      res.status(400).json({ error: error.message })
    }
    res.status(200).send(createdItem) //  .json() will send proper headers in response so client knows it's json coming back
  })
})

items.get('/', (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundItems)
  })
})

items.get('/:id', (req, res) => {
  Item.findById(req.params.id, (err, foundItems) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundItems)
  })
})

items.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, deletedItem) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedItem)
  })
})

items.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedItem)
  })
})

module.exports = items