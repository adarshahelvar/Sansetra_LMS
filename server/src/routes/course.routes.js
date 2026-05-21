import express from "express";

import {
  createCourse,
  createTopic,
  addVideo,
  getCourseDetails,
  publishCourse,
  getAllCourses,
} from "../controllers/course.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", getAllCourses);
router.post(
  "/create",
  authMiddleware,
  roleMiddleware("admin", "instructor"),
  createCourse,
);

router.post(
  "/topic/create",
  authMiddleware,
  roleMiddleware("admin", "instructor"),
  createTopic,
);

router.post(
  "/video/add",
  authMiddleware,
  roleMiddleware("admin", "instructor"),
  addVideo,
);

router.get("/:id", getCourseDetails);

router.put(
  "/publish/:id",
  authMiddleware,
  roleMiddleware("admin", "instructor"),
  publishCourse,
);

export default router;
