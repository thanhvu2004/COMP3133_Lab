const express = require("express");
const mongoose = require("mongoose");
const restaurantRoutes = require("./routes/restaurantRoutes.js");
const app = express();

// MongoDB Atlas Connection String
const dbURI =
  "mongodb+srv://root:passW0rd@mycluster.i14yy.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";

// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Middleware
app.use(express.json());

// Routes
app.use("/restaurants", restaurantRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
