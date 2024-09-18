import React, { useContext } from 'react';
import { FlightContext } from './FlightContext';

function MyFlights() {
  const { bookedFlights } = useContext(FlightContext); // Rezervasyonları alıyoruz

  if (bookedFlights.length === 0) {
    return <p>Henüz bir uçuş rezervasyonu yapmadınız.</p>;
  }

  return (
    <div className="my-flights">
      <h2>Rezerve Edilen Uçuşlarım</h2>
      <div className="flight-list">
        {bookedFlights.map((flight, index) => (
          <div key={index} className="flight-item">
            <div className="flight-header">
              <h3>{flight.route.destinations[0]} - {flight.flightName}</h3>
            </div>
            <div className="flight-details">
              <p><strong>Kalkış Zamanı:</strong> {new Date(flight.scheduleDateTime).toLocaleString()}</p>
              <p><strong>Varış Zamanı:</strong> {new Date(flight.estimatedLandingTime).toLocaleString()}</p>
              <p><strong>Havalimanı:</strong> {flight.route.destinations[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFlights;
