import User from "../model/user.js";

export const generatePersona = async (req, res) => {
  try {
    const { userId } = req.params;
    const { answers } = req.body;

    console.log("UserId:", userId);
    console.log("Answers:", answers);

    if (!answers || answers.length < 5) {
      return res.status(400).json({
        message: "Not enough data to generate persona",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let score = {
      calm: 0,
      energetic: 0,
      analytical: 0,
      emotional: 0,
    };

    answers.forEach((a) => {
      if (a.includes("calm") || a.includes("peace")) score.calm++;
      if (a.includes("energy") || a.includes("active")) score.energetic++;
      if (a.includes("logic") || a.includes("think")) score.analytical++;
      if (a.includes("feel") || a.includes("heart")) score.emotional++;
    });

    let personaType = "Balanced Persona";
    const maxScore = Math.max(
      score.calm,
      score.energetic,
      score.analytical,
      score.emotional
    );

    if (maxScore === score.calm) personaType = "Calm Persona";
    if (maxScore === score.energetic) personaType = "Energetic Persona";
    if (maxScore === score.analytical) personaType = "Analytical Persona";
    if (maxScore === score.emotional) personaType = "Emotional Persona";

    user.personaType = personaType;
    user.quizScores = score;
    await user.save();

    res.status(200).json({
      message: "Persona generated",
      personaType,
      scores: score,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
