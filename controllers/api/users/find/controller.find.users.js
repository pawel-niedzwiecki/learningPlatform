// Import modules and plugin
var usersModules = require('../../../../models/users/users.model')

// this is controller for find users in api
exports.users_find_post = function (req, res, next) {
  usersModules.SchemaUsersDB.find((err, data) => {
    if (err) return res.json({ message: 'error find users' })
    res.json(data)
  })
}
