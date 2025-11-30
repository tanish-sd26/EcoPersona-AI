import express from "express";
import { getRecommendations } from "../controllers/recommendationControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, getRecommendations);
router.post("/user", getRecommendations);

export default router;
