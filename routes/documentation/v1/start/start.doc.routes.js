// Import modules and plugin
var express = require("express");
var router = express.Router();
var startV1Controller = require("../../../../controllers/documentation/v1/start/start.doc.controller");

// get doc v1 start.
router.get("/", startV1Controller.start_docv1_get);

module.exports = router;
