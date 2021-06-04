// Import modules and plugin
var { files_add_post } = require("./add/controller.add.files");
var { files_find_post } = require("./find/controller.find.files");
var { files_edit_post } = require("./edit/controller.edit.files");
var { files_delete_post } = require("./delete/controller.delete.files");

// this is all controller for files in api
module.exports = {
  files_add_post: files_add_post,
  files_find_post: files_find_post,
  files_edit_post: files_edit_post,
  files_delete_post: files_delete_post,
};
