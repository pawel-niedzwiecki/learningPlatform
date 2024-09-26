// Import modules and plugin
const usersModules = require('../../../../models/users/users.model').UsersDB
const validate = require('./../../../../models/validate/validate.model')

// this is controller for singup users in api
exports.auth_singup_post = async function (req, res, next) {
  // i send mesage when user not gives me email or passord
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ success: false, message: 'email & password is require' })
  }

  // i validate email and passowrd
  const emailValidate = new validate.validateEmail(req.body.email).validate
  const passordValidate = new validate.validatePassowrd(req.body.password, 5).validate

  // if email or password is false send status 400 and message
  if (!emailValidate || !passordValidate) {
    return res.status(400).json({ success: false, message: 'email or password is false' })
  }

  // i try create new user
  await new usersModules({
    email: req.body.email,
    password: req.body.password,
  }).save(function (err) {
    if (err) {
      if (err.errors)
        return res.status(400).json({
          success: false,
          message: err.errors.email.properties.message,
        })
      if (err.keyPattern.email === 1 && err.code === 11000)
        
        // i send mesage when is not unique email
        return res.status(400).json({
          success: false,
          message: 'not is unique',
        })
    }

    // i send mesage when i finish create new user
    res.status(200).json({
      success: true,
    })
  })
}
