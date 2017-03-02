const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const data = req.decoded
  const response = {
    id: data._id,
    email: data.email
  }
  console.log(response);
  res.json(response)
})

module.exports = router
