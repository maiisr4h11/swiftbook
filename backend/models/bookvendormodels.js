const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookVendorSchema = new Schema({
    // bookVendorId: { type: Schema.Types.ObjectId, required: true, unique: true, default: () => new mongoose.Types.ObjectId() },
    eventname : { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phonenum: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String }
    
})



module.exports = mongoose.model('BookVendor', bookVendorSchema)