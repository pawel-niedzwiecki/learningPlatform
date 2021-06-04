// Import modules and plugin
var express = require("express");
var router = express.Router();
var startV1Controller = require("../../../../controllers/documentation/v1/lectures/lectures.doc.controller");

// get doc v1 lectures.
router.get("/", startV1Controller.lectures_docv1_get);

module.exports = router;
