// Import modules and plugin
var express = require("express");
var router = express.Router();
var usersV1Controller = require("../../../../controllers/documentation/v1/users/users.doc.controller");

// get doc v1 start.
router.get("/", usersV1Controller.users_docv1_get);

module.exports = router;
