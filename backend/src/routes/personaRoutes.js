import express from "express";
import {generatePersona} from "../controllers/personaControllers.js";
const router = express.Router();

router.post("/generate", generatePersona);

export default router;