import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div id="nav-div">
      <nav>
        <div id="img-name">
          <img src="/images/download.jpeg" alt="logo" />
          <p>RABISHOO KIDZ</p>
        </div>

        <button className="menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>

        <ul className={isMobileMenuOpen ? 'nav-links active' : 'nav-links'}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
          <li><Link to="/products" onClick={closeMobileMenu}>Products</Link></li>
        </ul>
      </nav>
    </div>
  );
};
