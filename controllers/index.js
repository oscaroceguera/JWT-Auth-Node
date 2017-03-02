const express = require('express')
const router = express.Router()
const VerifyToken = require('../middlewares/verifyToken')
const UserController = require('./user')
const ProtectedController = require('./protected')

router.use('/user', UserController)
router.use('/protected', VerifyToken, ProtectedController)

module.exports = router
