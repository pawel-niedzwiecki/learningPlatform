// Import modules and plugin
var { users_add_post } = require("./add/controller.add.users");
var { users_find_post } = require("./find/controller.find.users");
var { users_edit_post } = require("./edit/controller.edit.users");
var { users_delete_post } = require("./delete/controller.delete.users");

// this is all controller for users in api
module.exports = {
  users_add_post: users_add_post,
  users_find_post: users_find_post,
  users_edit_post: users_edit_post,
  users_delete_post: users_delete_post,
};
