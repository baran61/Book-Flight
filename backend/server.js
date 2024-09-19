const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const axios = require('axios');
const flightRoutes = require('./models/Flights');
require('dotenv').config()

app.use(express.json()); // JSON verilerini almak için middleware

app.use('/api/flights', flightRoutes);

app.use(cors()); // CORS'u aktif hale getirme fonksiyonu

const mongoose = require('mongoose');

// MongoDB bağlantısı
const mongoUri = process.env.DB_URI;  // MongoDB adresinizi buraya yazın

mongoose.connect(process.env.DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const API_URL = 'https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime'; // API Adresi

// Uçuşları çekme fonksiyonu
const getFlights = async () => {
  try {
    const response = await axios.get(API_URL, { 
      headers: {
        'Accept': 'application/json',
        'app_id': '0bfbd470',
        'app_key': 'f428a7af3872393f6b49e6036c7ec988',
        'ResourceVersion': 'v4'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Kök URL için 
app.get('/', (req, res) => {
  res.send('Welcome to the Flight API!');
});

// Uçuşları listeleme route'u
app.get('/api/flights', async (req, res) => {
  try {
    const flights = await getFlights();
    res.json(flights);
    console.log("Flight data fetched successfully!");
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch flights' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
