import express from "express";
import Remedy from "../models/Remedy.js";

const router = express.Router();

// Submit new remedy
router.post("/", async (req, res) => {
  try {
    const remedy = new Remedy({
      ...req.body,
      status: "pending", // always pending for admin review
      submittedBy: req.body.userId || null
    });
    await remedy.save();
    res.json({ success: true, remedy });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving remedy" });
  }
});

// Get all remedies (for admin dashboard)
router.get("/", async (req, res) => {
  try {
    const remedies = await Remedy.find().sort({ createdAt: -1 });
    res.json({ success: true, remedies });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching remedies" });
  }
});

// Update status (approve/reject)
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const remedy = await Remedy.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json({ success: true, remedy });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error updating remedy status" });
  }
});

export default router;
