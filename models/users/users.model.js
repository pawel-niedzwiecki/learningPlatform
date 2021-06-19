// import all function and pligins for users models
const UsersDB = require('./schemaDB/schema.db')
const UsersEdit = require('./edit/edit')

// Export models
module.exports = {
  UsersDB: UsersDB,
  UsersEdit: UsersEdit,
}
