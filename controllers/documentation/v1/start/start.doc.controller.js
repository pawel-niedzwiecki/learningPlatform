// this is controller for start in doc v1
exports.start_docv1_get = function (req, res, next) {
  res.render("index", { title: "start doc v1" });
};
