const crypto = require("crypto");

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
const generateUserId = () => crypto.randomBytes(8).toString("hex");

module.exports = { generateOTP, generateUserId };