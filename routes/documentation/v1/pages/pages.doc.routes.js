// Import modules and plugin
var express = require("express");
var router = express.Router();
var startV1Controller = require("../../../../controllers/documentation/v1/pages/pages.doc.controller");

// get doc v1 pages.
router.get("/", startV1Controller.pages_docv1_get);

module.exports = router;
