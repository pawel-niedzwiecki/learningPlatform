// Import modules and plugin
var express = require("express");
var router = express.Router();

// GET files page doc api.
router.get("/files", function (req, res, next) {
  res.render("index", { title: "files doc api" });
});

module.exports = router;
