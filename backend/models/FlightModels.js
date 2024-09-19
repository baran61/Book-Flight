const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  lastUpdatedAt: { type: Date, required: true },
  actualLandingTime: { type: Date, required: true },
  aircraftType: {
    iataMain: { type: String, required: true },
    iataSub: { type: String, required: true },
  },
  baggageClaim: {
    belts: { type: [String], required: true },
  },
  codeshares: {
    codeshares: { type: [String], required: true },
  },
  estimatedLandingTime: { type: Date, required: true },
  expectedTimeOnBelt: { type: Date, required: true },
  flightDirection: { type: String, required: true },
  flightName: { type: String, required: true },
  flightNumber: { type: Number, required: true },
  id: { type: String, required: true }, 
  isOperationalFlight: { type: Boolean, required: true },
  mainFlight: { type: String, required: true },
  prefixIATA: { type: String, required: true },
  prefixICAO: { type: String, required: true },
  airlineCode: { type: Number, required: true },
  publicFlightState: {
    flightStates: { type: [String], required: true },
  },
  route: {
    destinations: { type: [String], required: true },
    eu: { type: String, required: true },
    visa: { type: Boolean, required: true },
  },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
