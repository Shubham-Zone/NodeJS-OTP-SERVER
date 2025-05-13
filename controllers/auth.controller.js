const { initiateLogin, confirmOtp } = require("../services/auth.service");

const sendOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: "Phone number required" });

  try {
    await initiateLogin(phone);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error sending OTP", error: err.message });
  }
};

const verify = async (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ message: "Phone and OTP required" });

  try {
    const userId = await confirmOtp(phone, otp);
    res.status(200).json({ message: "Login successful", userId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { sendOtp, verify };
