// Import modules and plugin
var express = require("express");
var router = express.Router();
var usersController = require("../../../controllers/api/users/users.controllers");

// post api users add.
router.post("/add", usersController.users_add_post);

// post api users edit.
router.post("/edit", usersController.users_edit_post);

// post api users delete.
router.post("/delete", usersController.users_delete_post);

// post api users find.
router.post("/find", usersController.users_find_post);

// post api users find.
router.post("/login", usersController.users_login_post);

// post api users find.
router.post("/singup", usersController.users_singup_post);

module.exports = router;
