// this is controller for lectures in doc v1
exports.lectures_docv1_get = function (req, res, next) {
  res.render("index", { title: "lectures doc v1" });
};
