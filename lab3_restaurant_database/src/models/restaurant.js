const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurant_id: { type: String, required: true },
  name: { type: String, required: true },
  cuisine: [String], // Array of cuisines
  city: { type: String, required: true },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
