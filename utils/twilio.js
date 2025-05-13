const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendOTP = async (phoneNumber) => {
  return client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_ID)
    .verifications.create({
      to: `+91${phoneNumber}`,
      channel: "sms",
    });
};

const verifyOTP = async (phoneNumber, otp) => {
  return client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_ID)
    .verificationChecks.create({
      to: `+91${phoneNumber}`,
      code: otp,
    });
};

module.exports = { sendOTP, verifyOTP };
