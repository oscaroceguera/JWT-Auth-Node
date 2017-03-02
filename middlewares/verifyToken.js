const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, global.config.jwt_secret, (error, decoded) => {
      if (error) {
        return res.json({error})
      }
      req.decoded = decoded
      next() // no error, proceed
    })
  } else {
    // forbidden without token
    return res.status(403).send({
      error: true
    })
  }
}
