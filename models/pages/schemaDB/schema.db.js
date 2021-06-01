// Dependencies import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for Pages
const schemaPages = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  cover: { type: Schema.Types.ObjectId, ref: "file" },
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

// Export Schama and Create model for Pages
module.exports = mongoose.model("page", schemaPages);
