// Import modules and plugin
var express = require("express");
var router = express.Router();
var selectController = require("../../controllers/documentation/select.doc.controller");

// get doc select.
router.get("/", selectController.select_doc_get);

module.exports = router;
