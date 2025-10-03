import mongoose from "mongoose";

const remedySchema = new mongoose.Schema({
  nameEn: { type: String, required: true },
  nameTa: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  prepTime: { type: String, required: true },
  symptomsEn: { type: String, required: true },
  symptomsTa: { type: String, required: true },
  ingredientsEn: { type: String, required: true },
  ingredientsTa: { type: String, required: true },
  preparationEn: { type: String, required: true },
  preparationTa: { type: String, required: true },
  dosageEn: { type: String, required: true },
  dosageTa: { type: String, required: true },
  safetyTipsEn: { type: String, required: true },
  safetyTipsTa: { type: String, required: true },

  // Link to user
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },

  // Admin status
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },

}, { timestamps: true });

const Remedy = mongoose.model("Remedy", remedySchema);
export default Remedy;
