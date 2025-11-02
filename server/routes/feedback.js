const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// ✅ POST new feedback
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📩 Received feedback:", req.body);
    const feedback = new Feedback({ name, email, message, date: new Date() });
    await feedback.save();
    res.json({ message: "Feedback submitted successfully!" });
  } catch (err) {
    console.error("Error saving feedback:", err);
    res.status(500).json({ message: "Server error while saving feedback" });
  }
});

// ✅ GET all feedback (admin)
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Server error while fetching feedback" });
  }
});

module.exports = router;
