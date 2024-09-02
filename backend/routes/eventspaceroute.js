const express = require('express');
const mongoose = require('mongoose');
const EventSpace = require('../models/EventModels');
const router = express.Router();

// Create a new event space
router.post('/', async (req, res) => {
    const { event_space_ID, name_event_space, location, highlight, description, price, capacity, office_number, image_logo, image1, image2, image3 } = req.body;
    
    try {
        // Validate required fields
        if (!event_space_ID || !name_event_space || !location || !highlight || !description || !price || !capacity || !image_logo || !image1) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const eventSpace = new EventSpace({ event_space_ID, name_event_space, location, highlight, description, price, capacity, office_number, image_logo, image1, image2, image3 });
        await eventSpace.save();
        res.status(201).json({ message: 'Event space created', eventSpace });
    } catch (error) {
        console.error('Error creating event space:', error);
        res.status(400).json({ error: error.message });
    }
});

// Retrieve all event spaces
router.get('/', async (req, res) => {
    try {
        const eventSpaces = await EventSpace.find();
        res.json(eventSpaces);
    } catch (error) {
        console.error('Error retrieving event spaces:', error);
        res.status(500).json({ error: error.message });
    }
});

// Retrieve an event space by event_space_ID
router.get('/:event_space_ID', async (req, res) => {
    const { event_space_ID } = req.params;

    try {
        // Ensure that event_space_ID is a valid format for the query
        const eventSpace = await EventSpace.findOne({ event_space_ID });

        if (!eventSpace) {
            return res.status(404).json({ message: 'Event space not found' });
        }

        res.json(eventSpace);
    } catch (error) {
        console.error(`Error fetching event space with ID ${event_space_ID}:`, error);
        res.status(500).json({ error: error.message });
    }
});

// Delete an event space by event_space_ID
router.delete('/:event_space_ID', async (req, res) => {
    const { event_space_ID } = req.params;

    try {
        const result = await EventSpace.deleteOne({ event_space_ID });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Event space not found' });
        }

        res.status(200).json({ message: 'Event space deleted' });
    } catch (error) {
        console.error(`Error deleting event space with ID ${event_space_ID}:`, error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;