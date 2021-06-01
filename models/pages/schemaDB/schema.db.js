// Dependencies import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for Lectures
const schemaPages = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  cover: { type: String },
  block: [
    {
      _blockId: Schema.Types.ObjectId,
      description: Schema.Types.Mixed,
      type: { type: String, default: "string", required: true },
    },
  ],
  dateAdded: { type: Date, default: Date.now, required: true },
  dateLastModified: { type: Date, default: Date.now, required: true },
});

// Export Schama and Create model for Lectures
module.exports = mongoose.model("page", schemaPages);
