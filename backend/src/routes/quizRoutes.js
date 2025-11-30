import express from "express";
import { submitQuiz } from "../controllers/quizControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, submitQuiz); 
export default router;
