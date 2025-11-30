import express from "express";
import { getRecommendations } from "../controllers/recommendationControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", protect, getRecommendations);
// fallback: router.post("/generate", getRecommendations);

export default router;
