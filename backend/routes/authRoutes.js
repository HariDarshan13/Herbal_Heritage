import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user"
    });

    res.json({ success: true, user: { id: newUser._id, name: `🌿 ${newUser.name}`, email: newUser.email, role: newUser.role } });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Admin shortcut
    if (email === "admin@herbalheritage.com" && password === "admin123") {
      return res.json({ success: true, user: { id: "1", name: "👑 Admin User", email, role: "admin" } });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    res.json({ success: true, user: { id: user._id, name: `🌿 ${user.name}`, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
