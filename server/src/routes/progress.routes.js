import express from "express";
import { markVideoCompleted } from "../controllers/progress.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/complete", authMiddleware, markVideoCompleted);

export default router;
