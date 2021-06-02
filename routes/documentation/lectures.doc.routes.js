// Import modules and plugin
var express = require("express");
var router = express.Router();

// GET lectures page doc api.
router.get("/lectures", function (req, res, next) {
  res.render("index", { title: "lectures doc api" });
});

module.exports = router;
