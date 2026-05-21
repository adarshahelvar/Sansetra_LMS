import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

import { continueWatching, myCourses } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user,
  });
});

router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({
    message: "Admin panel",
  });
});

router.get("/continue-watching", authMiddleware, continueWatching);

router.get("/my-courses", authMiddleware, myCourses);
export default router;
