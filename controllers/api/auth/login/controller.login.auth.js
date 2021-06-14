// Import modules and plugin
require('dotenv').config()
const e = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')

// this is controller for auth users in api
exports.auth_login_post = function (req, res, next) {
  // passport authenticate
  passport.authenticate('local', { session: false }, (err, user, info) => {
    // send response if auth is false
    if (err || !user) {
      return res.status(400).json({
        auth: false,
        message: 'Something is not right',
      })
    }

    // send response if auth is true
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err)
      }

      // generate a signed son web token with the contents of user object and return it in the response
      jwt.sign(
        { id: user._id, iat: Date.now() + 86400000 },
        process.env.SECRET_KEY_JWT,
        (err, token) => {
          try {
            // send message when token does not exist
            if (!token) return res.status(400).json({ auth: false, message: 'err token' })
            // send message when token is ok and error is false
            return res.json({ auth: true, id: user._id, token })
          } catch (err) {
            // send message when error is true
            return res.status(400).json({ auth: false, message: 'err token' })
          }
        }
      )
    })
  })(req, res)
}
