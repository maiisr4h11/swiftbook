const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  customer_name: { type: String, required: true },
  customer_email: { type: String, required: true, match: /.+\@.+\..+/ }, // Validate email format
  customer_phone: { type: String, required: true, match: /^[0-9]{10,15}$/ }, // Adjust phone number format for flexibility
  date_reservation: { type: Date, required: true }, // Use Date type for reservation date
  time_reservation: { type: String, required: true }, // Use String if time is in a specific format, or Date if time needs to be precise
  name_event_space: { type: Schema.Types.ObjectId, ref: 'Eventspace', required: true }, // Reference to Eventspace
  remarks: { type: String },
  reference_number: { type: String, unique: true }, // Ensure reference numbers are unique
  timestamp: { type: Date, default: Date.now } // Default to current time
});

// Indexing for performance on commonly queried fields
reservationSchema.index({ name_event_space: 1 });
reservationSchema.index({ date_reservation: 1 });

module.exports = mongoose.model('Reservation', reservationSchema);