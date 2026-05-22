import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import roleMiddleware from "../middleware/role.middleware.js";

import { createTopic } from "../controllers/topic.controller.js";

const router = express.Router();

router.post(
  "/",

  authMiddleware,

  roleMiddleware("admin", "instructor"),

  createTopic,
);

export default router;
