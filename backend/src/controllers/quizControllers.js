export const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || answers.length === 0) {
      return res.status(400).json({
        message: "Quiz answers missing",
      });
    }

    // Basic scoring logic
    let score = 0;

    answers.forEach((ans) => {
      if (ans.toLowerCase().includes("eco")) score += 10;
      if (ans.toLowerCase().includes("sustainable")) score += 15;
      if (ans.toLowerCase().includes("recycle")) score += 5;
      if (ans.toLowerCase().includes("public transport")) score += 20;
    });

    let level = "Beginner";

    if (score > 40) level = "Intermediate";
    if (score > 70) level = "Eco Master";

    return res.status(200).json({
      message: "Quiz submitted",
      totalScore: score,
      ecoLevel: level,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in quiz" });
  }
};
