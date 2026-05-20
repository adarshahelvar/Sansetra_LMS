import express from "express";
import { register, verifyOtp, login } from "../controllers/auth.controller.js";
import {
  registerValidation,
  verifyOtpValidation,
  loginValidation,
} from "../validations/auth.validation.js";

const router = express.Router();

router.post("/register", registerValidation, register);
router.post("/verify-otp", verifyOtpValidation, verifyOtp);
router.post("/login", loginValidation, login);

export default router;
