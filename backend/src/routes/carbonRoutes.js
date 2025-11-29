import express from "express";
import { estimateCarbon } from "../controllers/carbonControllers.js";
const router = express.Router();

router.post("/", estimateCarbon);

export default router;
