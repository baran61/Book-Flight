import React, { createContext, useState } from 'react';

// Context oluşturma
export const FlightContext = createContext();

// Context Provider bileşeni
export const FlightProvider = ({ children }) => {
  const [bookedFlights, setBookedFlights] = useState([]); // Rezervasyon listesi

  // Uçuş ekleme fonksiyonu
  const addFlight = (flight) => {
    setBookedFlights((prevFlights) => [...prevFlights, flight]);
  };

  return (
    <FlightContext.Provider value={{ bookedFlights, addFlight }}>
      {children}
    </FlightContext.Provider>
  );
};
