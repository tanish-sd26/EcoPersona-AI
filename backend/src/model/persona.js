import mongoose from "mongoose";

const personaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  personaType: { type: String, required: true },
  scores: { type: Object, default: {} },
}, { timestamps: true });

export default mongoose.model("Persona", personaSchema);
