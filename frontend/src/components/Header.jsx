import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../assets/Logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="KV Logo" className="logo-image" />
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link" 
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

