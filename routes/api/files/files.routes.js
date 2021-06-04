// Import modules and plugin
var express = require("express");
var router = express.Router();
var filesControllers = require("../../../controllers/api/files/files.index.controller");

// post api files add.
router.post("/add", filesControllers.files_add_post);

// // post api files edit.
router.post("/edit", filesControllers.files_edit_post);

// // post api files delete.
router.post("/delete", filesControllers.files_delete_post);

// // post api files find.
router.post("/find", filesControllers.files_find_post);

module.exports = router;
