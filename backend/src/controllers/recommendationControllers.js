import { generateRecommendations } from "../ai/recommendationEngine.js";

export const getRecommendations = async (req, res) => {
  try {
    const { persona, score } = req.body;

    if (!persona || score === undefined) {
      return res.status(400).json({
        message: "Persona or score missing",
      });
    }

     const recs = generateRecommendations(persona, score);

    res.status(200).json({
      message: "Recommendations generated successfully!",
      recommendations: recs,
    });
  } catch (error) {
    console.log("Recommendation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

