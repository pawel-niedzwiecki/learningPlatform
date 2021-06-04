// Import modules and plugin
var express = require("express");
var router = express.Router();
var startV1Controller = require("../../../../controllers/documentation/v1/files/files.doc.controller");

// get doc v1 lectures.
router.get("/", startV1Controller.files_docv1_get);

module.exports = router;
