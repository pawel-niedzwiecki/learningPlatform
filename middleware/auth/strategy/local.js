const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const UserModel = require('../../../models/users/users.model').UsersDB

// login
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, callBack) {
      // i try find user
      return UserModel.findOne({ email })
        .then((user) => {
          // if i found user , i compare his password
          bcrypt.compare(password, user.password, (err, result) => {
            // if password is true , i send response in callback
            if (result) {
              return callBack(null, user, {
                message: 'Logged In Successfully',
              })
            }

            // if password is false , i send response in callback
            return callBack(null, false, {
              message: 'Incorrect email or password.',
            })
          })
        })
        .catch((err) => callBack(err))
    }
  )
)
