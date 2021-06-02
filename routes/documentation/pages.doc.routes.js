// Import modules and plugin
var express = require("express");
var router = express.Router();

// GET pages page doc api.
router.get("/pages", function (req, res, next) {
  res.render("index", { title: "pages doc api" });
});

module.exports = router;
