import Recommendation from "../model/recommendation.js";
import { generateRecommendations } from "../ai/recommendationEngine.js";
import User from "../model/user.js";

export const getRecommendations = async (req, res) => {
  try {
    // Accept persona & score in body OR derive from user
    const userId = (req.user && req.user._id) || req.body.userId;
    let { persona, score } = req.body;

    if (!persona && userId) {
      const user = await User.findById(userId);
      persona = user?.personaType;
      score = user?.quizScores?.score || 0;
    }

    if (!persona) return res.status(400).json({ message: "Persona is required" });

    const recs = generateRecommendations(persona, score);

    if (userId) {
      // save for user
      await Recommendation.findOneAndUpdate(
        { user: userId },
        { items: recs },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Recommendations generated", recommendations: recs });
  } catch (err) {
    console.error("Recommendation error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
