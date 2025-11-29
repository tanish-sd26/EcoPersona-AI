import express from "express";
import { getRecommendations } from "../controllers/recommendationControllers.js";
const router = express.Router();

router.post("/generate", getRecommendations);

export default router;
