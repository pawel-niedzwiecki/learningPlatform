// Import modules and plugin
var { auth_login_post } = require("./login/controller.login.auth");
var { auth_singup_post } = require("./singup/controller.singup.auth");

// this is all controller for auth in api
module.exports = {
  auth_login_post: auth_login_post,
  auth_singup_post: auth_singup_post,
};
