// this is controller for pages in doc v1
exports.pages_docv1_get = function (req, res, next) {
  res.render("index", { title: "pages doc v1" });
};
