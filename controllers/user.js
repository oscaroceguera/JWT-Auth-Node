const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

// router.get('/log', (req, res) => {
//   res.json({log: 'wepa ahi tienen el log señorito'})
// })

router.post('/signup', (req, res) => {
  const {email, password} = req.body

  const user = new User({ email, password })

  user.save((err, data) => {
    return err ? res.json({error: true}) : res.json({error: false})
  })
})

router.post('/authenticate', (req, res) => {
  const {email, password} = req.body
  const data = {email, password}

  User.findOne(data).lean().exec((err, user) => {
    if (err) {
      return res.json(({error: true}))
    }
    if (!user) {
      return res.status(404).json({message: 'user not found!'})
    }

    console.log('USER', user);
    // let token = jwt.sign(user, global.config.jwt_secret, {
    //   expiresIn: 1440 // a hour
    // })
    let token = jwt.sign(user, global.config.jwt_secret)
    res.json({error: false, token})
  })
})

module.exports = router
