import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import roleMiddleware from "../middleware/role.middleware.js";

import { createVideo } from "../controllers/video.controller.js";

const router = express.Router();

router.post(
  "/",

  authMiddleware,

  roleMiddleware("admin", "instructor"),

  createVideo,
);

export default router;
