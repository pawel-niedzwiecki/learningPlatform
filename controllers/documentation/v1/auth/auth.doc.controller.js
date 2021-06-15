// this is controller for users in doc v1
exports.auth_docv1_get = function (req, res, next) {
  res.render('auth', { title: 'Auth:' })
}
