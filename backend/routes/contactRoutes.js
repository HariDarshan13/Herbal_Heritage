import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// ================== POST /api/contact ==================
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message, urgency } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Save contact message to DB
    const newContact = new Contact({ name, email, subject, message, urgency });
    await newContact.save();

    // Respond immediately to avoid frontend timeout
    res.status(201).json({ success: true, message: "Message submitted successfully" });

    // Send confirmation email asynchronously
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting Herbal Heritage",
      text: `Hi ${name},\n\nThank you for reaching out. We received your message:\n\nSubject: ${subject}\nMessage: ${message}\n\nWe will respond as soon as possible.\n\n- Herbal Heritage Team`,
    };

    transporter.sendMail(mailOptions)
      .then(() => console.log(`✅ Confirmation email sent to ${email}`))
      .catch(err => console.error("❌ Email error:", err));

  } catch (err) {
    console.error("❌ Contact submission error:", err);
    res.status(500).json({ success: false, message: err.message || "Server error" });
  }
});

// ================== GET /api/contact ==================
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, contacts });
  } catch (err) {
    console.error("❌ Error fetching contacts:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
