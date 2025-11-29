import express from "express";
import { submitQuiz } from "../controllers/quizControllers.js";
const router = express.Router();

router.post("/submit", submitQuiz);

export default router;