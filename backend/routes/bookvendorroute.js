const express = require('express');
const BookVendor = require('../models/bookvendormodels');
const router = express.Router();

// Create a new booking
router.post('/booking/vendor', async (req, res) => {
    const { eventname, price, date, time, location, firstname, lastname, phonenum, email, message } = req.body;
    
    try {
        if (!eventname || !price || !date || !time || !location || !firstname || !lastname || !phonenum || !email) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newBookVendor = new BookVendor({
            eventname,
            price,
            date,
            time,
            location,
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

// Get all bookings
router.get('/booking/vendor', async (req, res) => {
    try {
        const bookvendors = await BookVendor.find();
        res.json(bookvendors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Get booking by ID
router.get('/booking/vendor/:id', async (req, res) => {
    try {
        const bookvendor = await BookVendor.findById(req.params.id);
        if (!bookvendor) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.json(bookvendor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

// DELETE route to delete a booking by ID
router.delete('/booking/vendor/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBooking = await BookVendor.findByIdAndDelete(id);
  
      if (!deletedBooking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
  
      res.status(200).json({ message: 'Booking cancelled successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
});

// Update booking details by ID (choose PATCH or PUT based on your needs)
router.patch('/booking/vendor/:id', async (req, res) => {
  const { id } = req.params;
  const { eventname, firstname, lastname, phonenum, email, message } = req.body;

  try {
    const updatedBooking = await BookVendor.findByIdAndUpdate(
      id,
      {
        $set: {
          eventname,
          firstname,
          lastname,
          phonenum,
          email,
          message
        }
      },
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking updated successfully', updatedBooking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
