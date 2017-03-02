const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
global.config = require('./config/config')

const jwt = require('jsonwebtoken')
const User = require('./models/user')
const controllers = require('./controllers')

mongoose.connect('mongodb://localhost/demo')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.use(controllers)

app.listen(3000, () => {
  console.log('App running on 300');
})
