// Dependencies import
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for Lectures
const schemaLectures = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  cover: { type: Schema.Types.ObjectId, ref: "file" },
  createdBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
  shareFor: [{ type: Schema.Types.ObjectId, ref: "user" }],
  dateAdded: { type: Date, default: Date.now, required: true },
  dateLastModified: { type: Date, default: Date.now, required: true },
  section: [
    {
      _sectionID: Schema.Types.ObjectId,
      sectionName: { type: String, required: true },
      sectionDescription: { type: String, required: true },
      sectionLesson: [
        {
          _lessonID: Schema.Types.ObjectId,
          lessonName: { type: String, required: true },
          lessonDescription: { type: String, required: true },
          lessonVideo: {
            type: Schema.Types.ObjectId,
            ref: "file",
            required: true,
          },
          lessonCover: {
            type: Schema.Types.ObjectId,
            ref: "file",
            required: true,
          },
          lessonFile: [{ type: Schema.Types.ObjectId, ref: "file" }],
        },
      ],
    },
  ],
});

// Export Schama and Create model for Lectures
module.exports = mongoose.model("lecture", schemaLectures);
