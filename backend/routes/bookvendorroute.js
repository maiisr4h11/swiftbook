const express = require('express');
const BookVendor = require('../models/bookvendormodels');
const router = express.Router();

router.post('/bookingvendor', async (req, res) => {
    const { eventname, firstname, lastname, phonenum, email, message } = req.body;
    
    try {
        if (!eventname || !firstname || !lastname || !phonenum || !email) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newBookVendor = new BookVendor({
            bookVendorId: new mongoose.Types.ObjectId(), // Auto-generates an ID
            eventname,
            firstname,
            lastname,
            phonenum,
            email,
            message
        });

        await newBookVendor.save();
        res.status(201).json({ message: 'Booking created successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all foodfests
router.get('/details/bookingvendor', async (req, res) => {
    try {
        const bookvendor= await BookVendor.find();
        res.json(bookvendor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
// Get foodfest by ID
router.get('/:id', async (req, res) => {
    try {
        const bookvendor = await BookVendor.findById(req.params.id);
        if (!bookvendor) {
            return res.status(404).json({ message: 'Foodfest not found' });
        }
        res.json(bookvendor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


module.exports = router