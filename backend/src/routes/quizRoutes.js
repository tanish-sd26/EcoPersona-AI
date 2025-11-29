import express from "express";
import {submitQuiz  } from "../controllers/personaControllers.js";
const router = express.Router();

router.post("/submit", submitQuiz);

export default router;