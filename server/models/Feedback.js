const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  reply: { type: String, default: "" },   //  Admin reply field
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", feedbackSchema);

