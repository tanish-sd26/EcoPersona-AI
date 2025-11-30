import express from "express";
import { registerUser, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Default export
export default router;


