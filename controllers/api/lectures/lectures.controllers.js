// Import modules and plugin
var { lectures_add_post } = require("./add/controller.add.lectures");
var { lectures_find_post } = require("./find/controller.find.lectures");
var { lectures_edit_post } = require("./edit/controller.edit.lectures");
var { lectures_delete_post } = require("./delete/controller.delete.lectures");

// this is all controller for lectures in api
module.exports = {
  lectures_add_post: lectures_add_post,
  lectures_find_post: lectures_find_post,
  lectures_edit_post: lectures_edit_post,
  lectures_delete_post: lectures_delete_post,
};
