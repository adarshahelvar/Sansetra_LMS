import express from "express";

import { createCourse } from "../controllers/course.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  roleMiddleware("admin", "instructor"),
  createCourse,
);

export default router;
