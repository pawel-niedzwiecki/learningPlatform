// Dependencies import
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// i validate email
const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// Create Schema for Users
const schemaUsers = new Schema(
  {
    email: {
      trim: [true, "err trim"],
      type: String,
      unique: [true, "err unique"],
      required: [true, "err required"],
      lowercase: [true, "err lowercase"],
      validate: [validateEmail, "err valid"],
    },
    password: { type: String, required: [true, "err password"] },
    salt: { type: String, trim: true },
    avatar: { type: Schema.Types.ObjectId, ref: "file" },
  },
  {
    timestamps: true, // created_at / updated_at
  }
);

schemaUsers.pre("save", async function (next) {
  const newSalt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, newSalt);
  this.salt = newSalt;
  this.password = hash;
  next();
});

// Export Schama and Create model for Lectures
module.exports = mongoose.model("user", schemaUsers);
