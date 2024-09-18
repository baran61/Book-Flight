import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Anasayfa bileşeni
import MyFlightsPage from './pages/MyFlightsPage'; // Uçuşlarım sayfası
import { FlightProvider } from './components/FlightContext'; // FlightProvider'ı import et

function App() {
  return (
    <FlightProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-flights" element={<MyFlightsPage />} />
        </Routes>
      </Router>
    </FlightProvider>
  );
}

export default App;
