import { generateRecommendations } from "../ai/recommendationEngine.js";

export const getRecommendations = async (req, res) => {
  try {
    const { persona, score } = req.body;

    if (!persona || score === undefined) {
      return res.status(400).json({
        message: "Persona or score missing",
      });
    }

 
};

