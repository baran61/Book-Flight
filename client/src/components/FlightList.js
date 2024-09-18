import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FlightList() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/flights');
        setFlights(response.data.flights || []);
        setLoading(false);
      } catch (error) {
        console.error('Uçuş verileri çekilemedi:', error);
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
      {flights.length > 0 ? (
        flights.map((flight) => (
          <div key={flight.id}>
            <h2>{flight.flightName} ({flight.flightNumber})</h2>
            <p><strong>Scheduled Time:</strong> {new Date(flight.scheduleDateTime).toLocaleString()}</p>
            <p><strong>Actual Landing Time:</strong> {new Date(flight.actualLandingTime).toLocaleString()}</p>
            <p><strong>Aircraft Type:</strong> {flight.aircraftType.iataMain} {flight.aircraftType.iataSub}</p>
            <p><strong>Destination:</strong> {flight.route.destinations.join(', ')}</p>
            <p><strong>Terminal:</strong> {flight.terminal}</p>
            <p><strong>Baggage Belts:</strong> {flight.baggageClaim.belts.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
}

export default FlightList;
