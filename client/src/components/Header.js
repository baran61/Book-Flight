import React from 'react'
import './styles.css';

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
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
        </div>
      </header>
    </div>
  )
}

export default Header;
