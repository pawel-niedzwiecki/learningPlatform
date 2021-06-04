// Import modules and plugin
var express = require("express");
var router = express.Router();
var pagesController = require("../../../controllers/api/pages/pages.controllers");

// post api pages add.
router.post("/add", pagesController.pages_add_post);

// post api pages edit.
router.post("/edit", pagesController.pages_edit_post);

// post api pages delete.
router.post("/delete", pagesController.pages_delete_post);

// post api pages find.
router.post("/find", pagesController.pages_find_post);

module.exports = router;
