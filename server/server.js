const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const feedbackRoutes = require("./routes/feedback");
const productRoutes = require("./routes/products").default;

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/shopdb")
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
