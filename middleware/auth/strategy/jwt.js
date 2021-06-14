// import
require('dotenv').config()
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../../../models/users/users.model').SchemaUsersDB

const obj = {}
obj.secretOrKey = process.env.SECRET_KEY_JWT
obj.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()

passport.use(
  new JwtStrategy(obj, function (jwt_payload, done) {
    // if token is fresh go to next step

    if (new Date().getTime() > jwt_payload.iat) return done(null, false)
    // find user
    User.findOne({ _id: jwt_payload.id }, function (err, user) {
      if (err) return done(err, false)
      if (user) return done(null, user)
      return done(null, false)
    })
  })
)
