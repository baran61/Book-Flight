import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles.css';

function Header() {
  const navigate = useNavigate(); // useNavigate kancasını kullandım

  const handleFlightClick = () => {
    navigate('/my-flights'); // Uçuşlarım sayfasına yönlendirir.
  };

  const handleLogoClick = () => {
    navigate('/'); // Ana sayfaya yönlendirir.
  };

  return (
    <div>
      <header className="header">
        <div className="logo" onClick={handleLogoClick}>
          <img 
            src="https://img.icons8.com/hatch/64/C850F2/airplane-mode-on.png" 
            alt="airplane-mode-on"
            className="logo-icon"
          />
          <h3>PLANESCAPE</h3>
        </div>
        <div className="header-icons">
          <img  
            src="https://img.icons8.com/ios-filled/50/7950F2/price-tag.png" 
            alt="price-tag"
            className="icon"
          />
          <h4>Deals</h4>
          <img 
            src="https://img.icons8.com/glyph-neue/64/7950F2/gender-neutral-user.png" 
            alt="gender-neutral-user"
            className="icon"
          />
          <h4>Joane Smith</h4>
          <button onClick={handleFlightClick} className="flights-button">Uçuşlarım</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
