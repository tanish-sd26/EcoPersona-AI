import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    personaType: {
      type: String,
      default: null, 
    },

    quizScores: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

