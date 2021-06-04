// Import modules and plugin
var express = require("express");
var router = express.Router();
var lecturesController = require("../../../controllers/api/lectures/lectures.controllers");

// post api lecture add.
router.post("/add", lecturesController.lectures_add_post);

// post api lectures edit.
router.post("/edit", lecturesController.lectures_edit_post);

// post api lectures delete.
router.post("/delete", lecturesController.lectures_delete_post);

// post api lectures find.
router.post("/find", lecturesController.lectures_find_post);

module.exports = router;
