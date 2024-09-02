const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodfestSchema = new Schema({
    foodfest_id: { type: String, required: true },
    eventname: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    totalvendors: { type: Number, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('FoodFest', foodfestSchema);