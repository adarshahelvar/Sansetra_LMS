import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

import {
  checkEnrollment,
  continueWatching,
  getAdminDashboard,
  myCourses,
  getAllUsers,
  changeUserRole,
  deleteUser,
  getPaymentHistory,
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

router.get(
  "/all-users",

  authMiddleware,

  roleMiddleware("admin", "instructor"),

  getAllUsers,
);

router.put(
  "/change-role/:id",

  authMiddleware,

  roleMiddleware("admin", "instructor"),

  changeUserRole,
);

router.delete(
  "/delete-user/:id",

  authMiddleware,

  roleMiddleware("admin"),

  deleteUser,
);

router.get(
  "/payment-history",

  authMiddleware,

  roleMiddleware("admin", "instructor"),

  getPaymentHistory,
);
export default router;
