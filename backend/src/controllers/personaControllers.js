import User from "../model/user.js";
import Persona from "../model/persona.js";
import { generatePersonaFromAnswers } from "../ai/personaEngine.js";

export const generatePersona = async (req, res) => {
  try {
    const userId = (req.user && req.user._id) || req.params.userId || req.body.userId;
    const { answers } = req.body;

    if (!userId) return res.status(400).json({ message: "Missing userId" });
    if (!answers || !Array.isArray(answers) || answers.length < 1) {
      return res.status(400).json({ message: "Answers required to generate persona" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { personaType, scores } = generatePersonaFromAnswers(answers);

    user.personaType = personaType;
    user.quizScores = { ...scores };
    await user.save();

    // Save Persona document (optional)
    await Persona.findOneAndUpdate(
      { user: userId },
      { personaType, scores },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Persona generated", personaType, scores });
  } catch (err) {
    console.error("Persona generate error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
