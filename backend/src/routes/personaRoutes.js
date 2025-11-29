import express from "express";
import {generatePersona} from "../controllers/personaControllers.js";
const router = express.Router();

router.post("/generate/:userId", generatePersona);

export default router;