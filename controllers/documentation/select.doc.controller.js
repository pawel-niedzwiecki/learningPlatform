// this is controller for select in doc
exports.select_doc_get = function (req, res, next) {
  res.render('index', {
    title: 'Hello, World!',
    description:
      'This platform is designed for companies that would like to provide their employees access to video training inside company',
  })
}
