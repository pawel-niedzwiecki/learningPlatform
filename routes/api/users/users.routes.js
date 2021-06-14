// Import modules and plugin
const passport = require('passport')
const express = require('express')
const router = express.Router()
const usersController = require('../../../controllers/api/users/users.controllers')

// post api users add.
router.post('/add', usersController.users_add_post)

// post api users edit.
router.post('/edit', usersController.users_edit_post)

// post api users delete.
router.delete('/delete', usersController.users_delete_post)

// post api users find.
router.post('/find', usersController.users_find_post)

module.exports = router
