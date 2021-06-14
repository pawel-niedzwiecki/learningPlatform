// import
require('dotenv').config()
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../../../models/users/users.model').SchemaUsersDB

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY_JWT,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    function (jwt_payload, done) {
      // if token is fresh go to next step
      if (new Date().getTime() > jwt_payload.iat) return done(null, false)
      // find user
      User.findOne({ _id: jwt_payload.id }, function (err, user) {
        if (err) return done(err, false)
        console.log(user)
        if (user) return done(null, user)
        return done(null, false)
      })
    }
  )
)
