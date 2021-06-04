// this is controller for select in doc
exports.select_doc_get = function (req, res, next) {
  res.render("index", { title: "select doc" });
};
