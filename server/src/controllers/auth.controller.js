import bcrypt from "bcryptjs";
import User from "../models/User.js";
import OTP from "../models/OTP.js";
import generateOTP from "../utils/generateOTP.js";
import asyncHandler from "../utils/asyncHandler.js";
import { userExists } from "../services/auth.service.js";
import { sendOTP } from "../services/otp.service.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, phone, password, education, address } = req.body;

  const existing = await userExists(email, phone);

  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  const otp = generateOTP();
  const hashedPassword = await bcrypt.hash(password, 10);

  await OTP.deleteMany({ $or: [{ email }, { phone }] });

  await OTP.create({
    name,
    email,
    phone,
    password: hashedPassword,
    education,
    address,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  await sendOTP(email, otp);

  res.status(200).json({
    message: "OTP sent successfully. Please verify your email.",
  });
});

export const verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  const otpRecord = await OTP.findOne({ email, otp });

  if (!otpRecord) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  if (otpRecord.expiresAt < new Date()) {
    await OTP.deleteOne({ _id: otpRecord._id });
    return res.status(400).json({ message: "OTP expired" });
  }

  const existing = await userExists(otpRecord.email, otpRecord.phone);

  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    name: otpRecord.name,
    email: otpRecord.email,
    phone: otpRecord.phone,
    password: otpRecord.password,
    education: otpRecord.education,
    address: otpRecord.address,
    isEmailVerified: true,
    isPhoneVerified: false,
    role: "student",
  });

  await OTP.deleteOne({ _id: otpRecord._id });

  res.status(201).json({
    message: "Registration completed successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  if (!user.isActive) {
    return res.status(403).json({ message: "Account is blocked" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  res.status(200).json({
    message: "Login successful",
    accessToken,
    refreshToken,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
  });
});
