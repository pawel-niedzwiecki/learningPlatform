// Import modules and plugin
var express = require("express");
var router = express.Router();

// post api files add.
router.post("/add", function (req, res, next) {
  res.json("post api files add");
});

// post api files edit.
router.post("/edit", function (req, res, next) {
  res.json("post api files edit");
});

// post api files delete.
router.post("/delete", function (req, res, next) {
  res.json("post api files delete");
});

// post api files find.
router.post("/find", function (req, res, next) {
  res.json("post api files find");
});

module.exports = router;
