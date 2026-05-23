import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

import {
  checkEnrollment,
  continueWatching,
  getAdminDashboard,
  myCourses,
} from "../controllers/user.controller.js";

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

router.get("/check-enrollment/:courseId", authMiddleware, checkEnrollment);

router.get(
  "/admin-dashboard",

  authMiddleware,

  roleMiddleware("admin", "instructor"),

  getAdminDashboard,
);

export default router;
