const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightName: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true
    },
    // Diğer uçuş bilgileri
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
