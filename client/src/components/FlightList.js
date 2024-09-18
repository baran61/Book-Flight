import React, { useContext } from 'react';
import { FlightContext } from './FlightContext'; // Context'i import ediyoruz
import './styles.css';

function FlightList({ flights }) {
  const { addFlight } = useContext(FlightContext); // Context'ten addFlight fonksiyonunu alıyoruz

  if (!flights) {
    return <p>Uçuşlar yükleniyor...</p>;
  }

  if (flights.length === 0) {
    return <p>Hiç uçuş bulunamadı</p>;
  }

  return (
    <div className="flight-list">
      {flights.map((flight) => (
        <div key={flight.id} className="flight-item">
          <div className="flight-header">
            <h3>{flight.route.destinations[0]} - {flight.flightName}</h3>
          </div>
          <div className="flight-details">
            <div className="flight-times">
              <div className="departure">
                <p>🛫 Kalkış</p>
                <p><strong>{new Date(flight.scheduleDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong></p>
                <p>Havalimanı: {flight.route.destinations[0]}</p>
              </div>
              <div className="airline">
                <img src="https://cdn-icons-png.flaticon.com/512/984/984233.png" alt="Uçak" style={{ height: '40px' }} />
                <p>{Math.floor(Math.random() * 5) + 1} saat {Math.floor(Math.random() * 60)} dakika (Direkt)</p>
              </div>
              <div className="arrival">
                <p>🛬 Varış</p>
                <p><strong>{new Date(flight.estimatedLandingTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong></p>
                <p>Havalimanı: {flight.route.destinations[0]}</p>
              </div>
            </div>
            <div className="flight-pricing">
              <p><strong>Fiyat: ${(200 + Math.floor(Math.random() * 100)).toFixed(2)}</strong></p>
              <p>Gidiş-Dönüş</p>
              <button className="book-flight" onClick={() => addFlight(flight)}>Uçuşu Rezerve Et</button> {/*Kullanıcının Rezerve ettiği uçuşları alıyoruz */}
            </div>
          </div>
          <div className="flight-footer">
            <button className="details-button">Detayları Gör</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
