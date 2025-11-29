import express from "express";
import { generatePersona } from "../controllers/personaControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST: Generate persona
router.post("/:userId", protect, generatePersona);

export default router;
