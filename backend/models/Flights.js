const express = require('express');
const Flight = require('./FlightModels');
const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const newFlight = new Flight(req.body); // Gelen veriyi Flight modeli ile oluşturuyoruz
    const savedFlight = await newFlight.save(); // MongoDB'ye kaydediyoruz
    res.status(201).json(savedFlight);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save flight' });
  }
});



// Uçuşları listeleme route'u
router.get('/list', async (req, res) => {
    try {
      const flights = await Flight.find(); // Tüm uçuşları çek
      res.json(flights);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch flights' });
    }
  });
  

module.exports = router;