const express = require("express");
const router = express.Router();
const { sendOtp, verify } = require("../controllers/auth.controller");

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verify);

module.exports = router;
