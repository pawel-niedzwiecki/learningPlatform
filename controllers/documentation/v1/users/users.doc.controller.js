// this is controller for users in doc v1
exports.users_docv1_get = function (req, res, next) {
  res.render("index", { title: "users doc v1" });
};
