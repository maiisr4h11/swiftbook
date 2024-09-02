const express = require('express');
const FoodFest = require('../models/FoodFestModels');
const router = express.Router();

// Create a foodfest
router.post('/create/foodfest', async (req, res) => {
    const { foodfest_id, eventname, price, date, time, location, totalvendors, image } = req.body;
    try {
        if (!foodfest_id || !eventname || !price || !date || !time || !location || !totalvendors || !image) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newFoodFest = new FoodFest({ foodfest_id, eventname, price, date, time, location, totalvendors, image });
        await newFoodFest.save();
        res.status(201).json({ message: 'Foodfest created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all foodfests
router.get('/', async (req, res) => {
    try {
        const foodfests = await FoodFest.find();
        res.json(foodfests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
// Get foodfest by ID
router.get('/:id', async (req, res) => {
    try {
        const foodfest = await FoodFest.findById(req.params.id);
        if (!foodfest) {
            return res.status(404).json({ message: 'Foodfest not found' });
        }
        res.json(foodfest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;