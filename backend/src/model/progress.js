import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  points: { type: Number, default: 0 },
  badges: { type: [String], default: [] },
  completedTasks: { type: [String], default: [] },
}, { timestamps: true });

export default mongoose.model("Progress", progressSchema);
