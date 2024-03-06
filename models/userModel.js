const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
  },

  username: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
  },

  password: {
    type: String,
    required: [true, `A new user must have a password`],
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
