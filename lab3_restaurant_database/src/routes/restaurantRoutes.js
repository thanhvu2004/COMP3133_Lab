const express = require("express");
const Restaurant = require("../models/restaurant.js");
const router = express.Router();

// Get all restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    console.log("Restaurants found:", restaurants); // Log the data to check what is returned
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get restaurants by cuisine
router.get("/cuisine/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine;
    const restaurants = await Restaurant.find({ cuisine: cuisine });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get restaurants with selected columns and sort by restaurant_id
router.get("/", async (req, res) => {
  try {
    const { sortBy } = req.query;
    const restaurants = await Restaurant.find(
      {},
      "cuisine name city restaurant_id"
    ).sort({ restaurant_id: sortBy === "ASC" ? 1 : -1 });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get restaurants where cuisine is Delicatessen and city is not Brooklyn
router.get("/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
      "cuisine name city -_id"
    ).sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
