import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Anasayfa bileşeni
import MyFlightsPage from './pages/MyFlightsPage'; // Uçuşlarım sayfası

function App() {
  return (
    
    <Router>
      <Routes>

        <Route path="/" element= {<HomePage />} />
        <Route path="/my-flights" element= {<MyFlightsPage />} />

      </Routes>
    </Router>
    
  );
}

export default App;
