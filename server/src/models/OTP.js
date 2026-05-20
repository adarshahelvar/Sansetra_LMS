import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    password: String,
    education: String,
    address: String,
    otp: String,
    expiresAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("OTP", otpSchema);