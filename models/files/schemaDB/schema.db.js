// Dependencies import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for files
const schemaFiles = new Schema({
  type: { type: String, required: true },
  size: { type: Number, required: true },
  name: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
  dateLastModified: { type: Date, default: Date.now, required: true },
});

// Export Schama and Create model for files
module.exports = mongoose.model("file", schemaFiles);
