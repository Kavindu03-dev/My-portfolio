import React from 'react';
import './HomePage.css';
import profileImage from '../assets/pro.png';

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Kavindu_Vishwajith_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Kavindu Vishwajith</span>
            </h1>
            <h2 className="hero-subtitle">
              AI/ML Enthusiast & Data Science Student
            </h2>
            <p className="hero-description">
              Passionate about artificial intelligence and machine learning. 
              I create innovative solutions that make a difference in the world.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={downloadResume}
              >
                MY Resume
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-avatar">
              <img src={profileImage} alt="Kavindu Vishwajith" className="profile-image" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePage;
