// Import modules and plugin
const passport = require('passport')
const express = require('express')
const router = express.Router()
const usersController = require('../../../controllers/api/users/users.controllers')

// put api users edit.
router.put('/edit', usersController.users_edit_post)

// delete api users delete.
router.delete('/delete', usersController.users_delete_post)

// get api users find.
router.get('/find', usersController.users_find_post)

module.exports = router
