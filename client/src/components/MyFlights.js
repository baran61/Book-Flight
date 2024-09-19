import React, { useContext } from 'react';
import { FlightContext } from './FlightContext';
import './styles.css';

function MyFlights() {
  const { bookedFlights } = useContext(FlightContext);

  if (bookedFlights.length === 0) {
    return <p className="no-booking-message">Henüz bir uçuş rezervasyonu yapmadınız.</p>;
  }

  return (
    <div className="my-flights-container">

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-buttons">
          <button>Times</button>
          <button>Stops</button>
          <button>Airlines</button>
          <button>Airports</button>
          <button>Amenities</button>
          <a href="#edit" className="edit-search-link">Edit Search</a>
        </div>
        <div className="star-ratings">
          <span>★☆☆☆☆</span> <span>★★☆☆☆</span> <span>★★★☆☆</span> <span>★★★★☆</span> <span>★★★★★</span>
        </div>
      </div>
      {/* Average Fare Section */}
      <div className="average-fare">
        <i class="fas fa-info-circle info-icon"></i>
        <span>Avg Fare: $225</span>
      </div>

      <div className="filter-section-sort">
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" name="sort-by">
              <option value="recommended">Recommended</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option> 
          </select>
      </div>

      {/* Booked Flights List */}
      <div className="my-flights">
        <h2>Rezerve Edilen Uçuşlarım</h2>
        <div className="flight-list">
          {bookedFlights.map((flight, index) => (
            <div key={index} className="flight-item">
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
                    <img src="https://cdn-icons-png.flaticon.com/512/984/984233.png" alt="Uçak" className="flight-icon" />
                    <p>{Math.floor(Math.random() * 5) + 1} saat {Math.floor(Math.random() * 60)} dakika (Direkt)</p>
                  </div>
                  <div className="arrival">
                    <p>🛬 Varış</p>
                    <p><strong>{new Date(flight.estimatedLandingTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong></p>
                    <p>Havalimanı: {flight.route.destinations[0]}</p>
                  </div>
                </div>
                <div className="flight-pricing">
                  <div className="price-options">
                    <div className="price-box">
                      $156 <span>Main</span>
                    </div>
                    <div className="price-box">
                      $204 <span>Comfort+</span>
                    </div>
                    <div className="price-box">
                      $386 <span>Delta One</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flight-footer">
                <button className="details-button">Detayları Gör</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyFlights;
