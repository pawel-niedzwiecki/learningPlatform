// Import modules and plugin
var express = require('express')
var router = express.Router()
var authV1Controller = require('../../../../controllers/documentation/v1/auth/auth.doc.controller')

// get doc v1 auth.
router.get('/', authV1Controller.auth_docv1_get)

module.exports = router
