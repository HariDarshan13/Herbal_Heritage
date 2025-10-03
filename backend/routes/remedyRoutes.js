// routes/remedyRoutes.js
import express from "express";
import Remedy from "../models/Remedy.js";

const router = express.Router();

// GET all remedies
router.get("/", async (req, res) => {
  try {
    const remedies = await Remedy.find();
    res.json(remedies);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// GET a single remedy by ID
router.get("/:id", async (req, res) => {
  try {
    const remedy = await Remedy.findById(req.params.id);
    if (!remedy) return res.status(404).json({ message: "Remedy not found" });
    res.json(remedy);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// POST new remedy
router.post("/", async (req, res) => {
  try {
    const { name, description, benefits } = req.body;
    const newRemedy = new Remedy({ name, description, benefits });
    await newRemedy.save();
    res.status(201).json(newRemedy);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// DELETE a remedy
router.delete("/:id", async (req, res) => {
  try {
    const remedy = await Remedy.findByIdAndDelete(req.params.id);
    if (!remedy) return res.status(404).json({ message: "Remedy not found" });
    res.json({ message: "Remedy deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// UPDATE a remedy
router.put("/:id", async (req, res) => {
  try {
    const { name, description, benefits } = req.body;
    const updatedRemedy = await Remedy.findByIdAndUpdate(
      req.params.id,
      { name, description, benefits },
      { new: true }
    );
    if (!updatedRemedy) return res.status(404).json({ message: "Remedy not found" });
    res.json(updatedRemedy);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
