// Dependencies import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for Users
const schemaUsers = new Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  slug: { type: String, required: true },
  password: { type: String, required: true },
  signUpDate: { type: Date, default: Date.now, required: true },
  dateLastLogged: { type: Date, default: Date.now, required: true },
  avatar: { type: Schema.Types.ObjectId, ref: "file", required: true },
});

// Export Schama and Create model for Lectures
module.exports = mongoose.model("user", schemaUsers);
