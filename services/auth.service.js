const User = require("../models/user.model");
const { sendOTP, verifyOTP } = require("../utils/twilio");
const { generateUserId } = require("../utils/generate");

const initiateLogin = async (phone) => {
  await sendOTP(phone);
};

const confirmOtp = async (phone, otp) => {
  const result = await verifyOTP(phone, otp);

  if (result.status !== "approved") throw new Error("Invalid OTP");

  let user = await User.findOne({ phone });
  if (!user) {
    user = new User({ phone, userId: generateUserId() });
    await user.save();
  }

  return user;
};

module.exports = { initiateLogin, confirmOtp };
