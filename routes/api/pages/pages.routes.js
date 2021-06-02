// Import modules and plugin
var express = require("express");
var router = express.Router();

// post api pages add.
router.post("/add", function (req, res, next) {
  res.json("post api pages add");
});

// post api pages edit.
router.post("/edit", function (req, res, next) {
  res.json("post api pages edit");
});

// post api pages delete.
router.post("/delete", function (req, res, next) {
  res.json("post api pages delete");
});

// post api pages find.
router.post("/find", function (req, res, next) {
  res.json("post api pages find");
});

module.exports = router;
