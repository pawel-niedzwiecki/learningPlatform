// Import modules and plugin
var express = require("express");
var router = express.Router();

// GET users page doc api.
router.get("/users", function (req, res, next) {
  res.render("index", { title: "users doc api" });
});

module.exports = router;
