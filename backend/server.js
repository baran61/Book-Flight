const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const port = 3001;

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost/BOOKING-APP', {
    // useNewUrlParser ve useUnifiedTopology seçeneklerini kaldırın
});

const flightSchema = new mongoose.Schema({
    flightName: String,
    flightNumber: String,
    // Diğer uçuş bilgileri
});

const Flight = mongoose.model('Flight', flightSchema);

app.use(express.json()); // JSON verilerini parse etme

// Kök rota
app.get('/', (req, res) => {
    res.send('Backend API çalışıyor!');
});


// Uçuşları çekme
app.get('/api/flights', async (req, res) => {
    try {
        const response = await axios.get('https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime', {
            headers: {
                'ResourceVersion': 'v4',
                'app_id': '0bfbd470',
                'app_key': '428a7af3872393f6b49e6036c7ec988',
                'Accept': 'application/json'
            }
        });
        res.json(response.data.flights);
    } catch (error) {
        res.status(500).send("Uçuş verileri çekilirken hata oluştu.");
    }
});

// Rezervasyon yapma
app.post('/api/reserve', async (req, res) => {
    const { flightName, flightNumber } = req.body;
    if (!flightName || !flightNumber) {
        return res.status(400).send("Eksik bilgi");
    }
    const flight = new Flight({ flightName, flightNumber });
    try {
        await flight.save();
        res.status(201).send("Rezervasyon başarılı");
    } catch (error) {
        res.status(500).send("Rezervasyon yapılırken hata oluştu.");
    }
});

// Kullanıcının rezervasyonlarını çekme
app.get('/api/my-flights', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        res.status(500).send("Uçuşlar alınırken hata oluştu.");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
