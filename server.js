// Dependencies
const express = require('express')
const app = express()
const PORT =  process.env.PORT || 3003
const cors = require('cors')

const mongoose = require('mongoose')
require('dotenv').config()


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/items'

const whitelist = ['http://localhost:3000', 'https://laptop-app-client.herokuapp.com']
const corsOptions = {
  origin (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// middleware
app.use(express.json()) // specifying to use json not urlencoded

app.use(cors(corsOptions))

// Database set up
mongoose.connection.on('error', error => console.log(error))
mongoose.connection.on('disconnected', () => {
  console.log('mongo disconnected')
})

mongoose.set('useFindAndModify', false);

// connect to mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
})

// Routes
const itemsController = require('./controllers/items.js')
app.use('/items', itemsController)

// Listener
app.listen(PORT, () => {
  console.log('🎉🎊', 'listening and...listening and...', PORT, '🎉🎊',)
})