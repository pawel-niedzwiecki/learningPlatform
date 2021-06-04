// this is controller for files in doc v1
exports.files_docv1_get = function (req, res, next) {
  res.render("index", { title: "files doc v1" });
};
