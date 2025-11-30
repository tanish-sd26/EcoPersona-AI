import Quiz from "../model/quiz.js";
import User from "../model/user.js";
import { calculateScoreFromAnswers } from "../utils/calculateScores.js";

export const submitQuiz = async (req, res) => {
  try {
    // Support both token-based (req.user) or userId in body
    const userId = (req.user && req.user._id) || req.body.userId;
    const { answers } = req.body;

    if (!userId) return res.status(400).json({ message: "Missing userId" });
    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ message: "Answers required" });
    }

    const score = calculateScoreFromAnswers(answers);

    const quiz = await Quiz.create({ user: userId, answers, score });

    // update user quizScores
    const user = await User.findById(userId);
    if (user) {
      user.quizScores = { score, answersCount: answers.length };
      await user.save();
    }

    res.status(200).json({ message: "Quiz submitted", quizId: quiz._id, score });
  } catch (err) {
    console.error("Quiz submit error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
