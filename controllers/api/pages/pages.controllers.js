// Import modules and plugin
var { pages_add_post } = require("./add/controller.add.pages");
var { pages_find_post } = require("./find/controller.find.pages");
var { pages_edit_post } = require("./edit/controller.edit.pages");
var { pages_delete_post } = require("./delete/controller.delete.pages");

// this is all controller for pages in api
module.exports = {
  pages_add_post: pages_add_post,
  pages_find_post: pages_find_post,
  pages_edit_post: pages_edit_post,
  pages_delete_post: pages_delete_post,
};
