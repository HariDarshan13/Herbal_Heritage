import express from "express";
import Feedback from "../models/Feedback.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/feedback
router.post("/", async (req, res) => {
  try {
    const { name, email, type, remedyId, rating, subject, message } = req.body;

    if (!name || !email || !type || !subject || !message) {
      return res.status(400).json({ success: false, message: "All required fields must be filled" });
    }

    const newFeedback = new Feedback({ name, email, type, remedyId, rating, subject, message });
    await newFeedback.save();

    // Respond to frontend immediately
    res.status(201).json({ success: true, message: "Feedback submitted successfully" });

    // Send confirmation email asynchronously
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for your feedback!",
      text: `Hi ${name},\n\nThank you for your feedback.\n- Herbal Heritage Team`,
    };

    transporter.sendMail(mailOptions)
      .then(() => console.log(`✅ Email sent to ${email}`))
      .catch(err => console.error("❌ Email error:", err));

  } catch (err) {
    console.error("❌ Feedback submission error:", err);
    res.status(500).json({ success: false, message: err.message || "Server error" });
  }
});
export default router;
