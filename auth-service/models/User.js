const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
  },
});

userSchema.plugin(uniqueValidator, { message: "{PATH} doit être unique." });

module.exports = mongoose.model("User", userSchema);
