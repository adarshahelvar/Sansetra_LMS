import express from "express";
import {
  markVideoCompleted,
  getProgress,
} from "../controllers/progress.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/complete", authMiddleware, markVideoCompleted);

router.get("/:courseId", authMiddleware, getProgress);
export default router;
