import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import quizRoutes from "./src/routes/quizRoutes.js";
import personaRoutes from "./src/routes/personaRoutes.js";
import recommendationRoutes from "./src/routes/recommendationRoutes.js";
import carbonRoutes from "./src/routes/carbonRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/persona", personaRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/carbon", carbonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on backend port ${PORT}`);
});
