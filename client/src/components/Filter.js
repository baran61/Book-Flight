import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightList from './FlightList';
import './styles.css';

function Filter() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/flights');
        const flightsData = response.data.flights || [];
        setFlights(flightsData);
        setFilteredFlights(flightsData);          // İlk yüklendiğinde tüm uçuşları göster
        setLoading(false);
      } catch (error) {
        console.error('Uçuş verileri çekilemedi!', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleSearch = () => {
    const newFilteredFlights = flights.filter((flight) => {
      const flightDestinations = flight.route.destinations || [];
      const matchesDestination = destination
        ? flightDestinations.some(dest => dest.toLowerCase().includes(destination.toLowerCase()))
        : true;
      const matchesStartDate = startDate ? new Date(flight.scheduleDateTime) >= new Date(startDate) : true;
      const matchesEndDate = endDate ? new Date(flight.scheduleDateTime) <= new Date(endDate) : true;

      return matchesDestination && matchesStartDate && matchesEndDate;
    });

    setFilteredFlights(newFilteredFlights);
  };

  const handleKeyDown = (event) => {  // Enter'a basmak buttonu tetikler.
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  if (loading) return <p> Yükleniyor... </p>;
  if (error) return <p> Bir hata oluştu: {error.message}</p>;

  return (
    <div className="filter-container">
      <div className="filter-header">
        <div className="header-left">
          <i className="fas fa-plane"></i>
          <h2>Book Flights</h2>
        </div>
        <div className="filter-buttons">
          <button className="filter-btn">RoundTrip</button>
          <button className="filter-btn">OneWay</button>
        </div>
      </div>

      {/* Filtreleme formu */}
      <div className="filter-inputs" onKeyDown={handleKeyDown}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="filter-input"
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="filter-input"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="filter-input"
        />
      </div>

      <button className="book-flight" onClick={handleSearch}>
        Book Flights
      </button>

      {/* Uçuşları gösteren FlightList bileşeni */}
      <FlightList flights={filteredFlights} />
    </div>
  );
}

export default Filter;
