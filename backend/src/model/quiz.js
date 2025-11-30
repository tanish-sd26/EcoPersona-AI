import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  answers: { type: [String], default: [] },
  score: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Quiz", quizSchema);
