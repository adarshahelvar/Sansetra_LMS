import { body } from "express-validator";

export const registerValidation = [
  body("name").notEmpty().withMessage("Name required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("phone")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone must contain 10 digits"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password minimum 6 characters"),
];

export const verifyOtpValidation = [
  body("email").isEmail().withMessage("Valid email required"),
  body("otp").notEmpty().withMessage("OTP required"),
];

export const loginValidation = [
  body("email").isEmail().withMessage("Email required"),
  body("password").notEmpty().withMessage("Password required"),
];
