const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: { type: String, unique: true, required: true },
  userId: { type: String, unique: true, required: true },
  otp: String,
  otpExpiry: Date,
});

module.exports = mongoose.model("User", userSchema);
