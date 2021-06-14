// Import modules and plugin
var express = require('express')
var router = express.Router()
var authController = require('../../../controllers/api/auth/auth.controllers')

// post api auth login.
router.post('/login', authController.auth_login_post)

// post api auth create new user.
router.post('/singup', authController.auth_singup_post)

module.exports = router
