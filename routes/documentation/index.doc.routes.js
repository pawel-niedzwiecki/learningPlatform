// Import modules and plugin
var express = require("express");
var router = express.Router();

// GET home page doc api.
router.get("/", function (req, res, next) {
  res.render("index", { title: "home doc" });
});

module.exports = router;
