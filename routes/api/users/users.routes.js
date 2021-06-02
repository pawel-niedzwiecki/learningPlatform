// Import modules and plugin
var express = require("express");
var router = express.Router();

// post api users add.
router.post("/add", function (req, res, next) {
  res.json("post api users add");
});

// post api users edit.
router.post("/edit", function (req, res, next) {
  res.json("post api users edit");
});

// post api users delete.
router.post("/delete", function (req, res, next) {
  res.json("post api users delete");
});

// post api users find.
router.post("/find", function (req, res, next) {
  res.json("post api users find");
});

// post api users login.
router.post("/login", function (req, res, next) {
  res.json("post api users login");
});

// post api users singup.
router.post("/singup", function (req, res, next) {
  res.json("post api singup login");
});

module.exports = router;
