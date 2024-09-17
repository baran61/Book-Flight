import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightList() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flights');
        setFlights(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Uçuş verileri çekilirken hata oluştu:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) {
    return <p>Loading flights...</p>;
  }

  if (error) {
    return <p>There was an error loading flights.</p>;
  }

  return (
    <div>
      {flights.map((flight, index) => (
        <div key={index}>
          <h2>{flight.flightName}</h2>
          <p>{flight.flightNumber}</p>
          {/* Diğer uçuş bilgilerini burada gösterin */}
        </div>
      ))}
    </div>
  );
}

export default FlightList;
