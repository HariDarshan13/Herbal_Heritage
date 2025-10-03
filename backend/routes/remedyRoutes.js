import express from "express";
import Remedy from "../models/Remedy.js";

const router = express.Router();

// GET all remedies
router.get("/", async (req, res) => {
  try {
    const remedies = await Remedy.find().sort({ createdAt: -1 });
    res.json({ success: true, remedies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// GET a single remedy by ID
router.get("/:id", async (req, res) => {
  try {
    const remedy = await Remedy.findById(req.params.id);
    if (!remedy) return res.status(404).json({ success: false, message: "Remedy not found" });
    res.json({ success: true, remedy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// POST new remedy
router.post("/", async (req, res) => {
  try {
    const {
      nameEn, nameTa, category, difficulty, prepTime,
      symptomsEn, symptomsTa, ingredientsEn, ingredientsTa,
      preparationEn, preparationTa, dosageEn, dosageTa,
      safetyTipsEn, safetyTipsTa, userId
    } = req.body;

    const newRemedy = new Remedy({
      nameEn, nameTa, category, difficulty, prepTime,
      symptomsEn, symptomsTa, ingredientsEn, ingredientsTa,
      preparationEn, preparationTa, dosageEn, dosageTa,
      safetyTipsEn, safetyTipsTa, submittedBy: userId,
      status: "pending"
    });

    await newRemedy.save();
    res.status(201).json({ success: true, remedy: newRemedy });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// UPDATE remedy status (admin only)
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body; // pending, approved, rejected
    const updatedRemedy = await Remedy.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updatedRemedy) return res.status(404).json({ success: false, message: "Remedy not found" });
    res.json({ success: true, remedy: updatedRemedy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// DELETE a remedy (admin only)
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Remedy.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Remedy not found" });
    res.json({ success: true, message: "Remedy deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

export default router;
