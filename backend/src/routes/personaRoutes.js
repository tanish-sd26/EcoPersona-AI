import express from "express";
import { generatePersona } from "../controllers/personaControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/generate", protect, generatePersona);

router.post("/generate/:userId", generatePersona);

export default router;
