const express = require('express');
const Reservation = require('../models/ReservationModels');
const router = express.Router();

// Generate a reference number for the reservation
const generateReferenceNumber = () => {
  return 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

// Create a new reservation
router.post('/create', async (req, res) => {
  try {
    const {
      customer_name,
      customer_email,
      customer_phone,
      date_reservation,
      time_reservation,
      name_event_space,
      remarks,
      reference_number,
    } = req.body;

    // Generate a unique reference number if one is not provided
    const uniqueReferenceNumber = reference_number || await generateReferenceNumber();

    const newReservation = new Reservation({
      customer_name,
      customer_email,
      customer_phone,
      date_reservation,
      time_reservation,
      name_event_space,
      remarks,
      reference_number: uniqueReferenceNumber,
    });

    await newReservation.save();

    // Populate the event space details
    const populatedReservation = await Reservation.findById(newReservation._id)
      .populate('name_event_space', 'name_event_space')
      .exec();

    res.status(201).json(populatedReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all reservations with optional filtering
router.get('/', async (req, res) => {
  try {
    const { name_event_space, date_reservation } = req.query;
    const query = {};
    
    if (name_event_space) query.name_event_space = name_event_space;
    if (date_reservation) query.date_reservation = new Date(date_reservation);

    const reservations = await Reservation.find(query);
    res.json(reservations);
  } catch (error) {
    console.error('Error retrieving reservations:', error);
    res.status(500).json({ error: error.message });
  }
});



// Get Reservation Details by ID
router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
      .populate('name_event_space', 'name_event_space') // Populate event space name
      .exec();
    
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancel Reservation (delete by ID)
router.delete('/:id', async (req, res) => {
  try {
    const result = await Reservation.findByIdAndDelete(req.params.id);
    
    if (!result) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    
    res.status(200).json({ message: 'Reservation cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;