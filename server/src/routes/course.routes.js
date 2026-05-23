import express from "express";

import {
  createCourse,
  createTopic,
  addVideo,
  getCourseDetails,
  publishCourse,
  getAllCourses,
  getCourseContent,
} from "../controllers/course.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

/* Public */

router.get("/", getAllCourses);

router.get("/content/:courseId", authMiddleware, getCourseContent);

router.get("/:id", getCourseDetails);

/* Admin / Instructor */

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

router.put(
  "/publish/:courseId",
  authMiddleware,
  roleMiddleware("admin", "instructor"),
  publishCourse,
);

export default router;
