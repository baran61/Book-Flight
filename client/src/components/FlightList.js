import React from 'react';

function FlightList({ flights }) {
  if (!flights) {
    return <p>Loading flights...</p>; // Verilerin gelmesini bekliyoruz
  }

  if (flights.length === 0) {
    return <p>No flights found</p>; // Hiç uçuş bulunamazsa
  }

  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <div key={flight.id} className="flight-item">
          <h3>{flight.flightName}</h3>
          <p>Destination: {flight.route.destinations.join(', ')}</p>
          <p>Scheduled Time: {new Date(flight.scheduleDateTime).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
