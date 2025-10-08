import React, { useState } from 'react';
import './Projects.css';

// Icon Components
const WebIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16,18 22,12 16,6"/>
    <polyline points="8,6 2,12 8,18"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
  </svg>
);

const GameIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <circle cx="8" cy="8" r="1"/>
    <circle cx="16" cy="8" r="1"/>
  </svg>
);

const AIIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const ArtIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const getIcon = (iconType) => {
  switch (iconType) {
    case 'web':
      return <WebIcon />;
    case 'code':
      return <CodeIcon />;
    case 'database':
      return <DatabaseIcon />;
    case 'game':
      return <GameIcon />;
    case 'ai':
      return <AIIcon />;
    case 'art':
      return <ArtIcon />;
    default:
      return <WebIcon />;
  }
};

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "My Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js and Vite. Features dark blue theme, smooth animations, and showcases AI/ML skills and projects with original logos.",
      category: "web-development",
      technologies: ["React", "JavaScript", "CSS3", "Vite", "HTML5", "Responsive Design"],
      github: "https://github.com/Kavindu03-dev/My-portfolio",
      live: "#",
      status: "Completed",
      year: "2025"
    },
    {
      id: 2,
      title: "Computer Parts Management System",
      description: "A comprehensive Java-based management system for computer parts inventory. Features database management, user interface, and efficient tracking of computer components.",
      category: "java-development",
      technologies: ["Java", "MySQL", "Swing", "OOP", "JDBC", "File I/O"],
      github: "https://github.com/Kavindu03-dev/Computer-parts-management-system",
      live: "#",
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Driving School Management System",
      description: "A JavaScript-based management system for driving schools. Handles student records, scheduling, instructor management, and course tracking.",
      category: "web-development",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "DOM Manipulation", "Web App"],
      github: "https://github.com/Kavindu03-dev/driving-school-management",
      live: "#",
      status: "Completed",
      year: "2025"
    },
    {
      id: 4,
      title: "Snake Game",
      description: "A modern implementation of the classic Snake game, available in both Python (using pygame) and Web (HTML5/JavaScript) versions. Features progressive difficulty, obstacle systems, sound effects, and multiple control schemes.",
      category: "game-development",
      technologies: ["Python", "Pygame", "JavaScript", "HTML5", "CSS3", "Canvas API", "Game Development"],
      github: "https://github.com/Kavindu03-dev/Snake-game",
      live: "https://byte-snake.netlify.app/",
      status: "Completed",
      year: "2025"
    },
    {
      id: 5,
      title: "Real Estate AI",
      description: "An AI-powered tool for real estate market analysis and property valuation. Uses machine learning algorithms to predict property prices and provide market insights for investors and buyers.",
      category: "ai-ml",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
      github: "https://github.com/Kavindu03-dev/Real-estate-AI",
      live: "#",
      status: "Completed",
      year: "2025"
    },
    {
      id: 6,
      title: "ASCII Art Generator",
      description: "A web-based ASCII art generator that converts images into text-based artwork. Features live preview, multiple art types, customizable character sets, and a complete gallery system. Built with modern web technologies for an interactive user experience.",
      category: "web-development",
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Image Processing", "Web App"],
      github: "https://github.com/Kavindu03-dev/ASCII-art-generator-",
      live: "#",
      status: "Completed",
      year: "2024"
    },
    {
      id: 7,
      title: "Video Game Success Prediction",
      description: "A comprehensive machine learning project that predicts video game success using various features like genre, platform, price, and description text. Features 14 Jupyter notebooks covering data scraping, NLP analysis, and multiple ML models including Linear Regression, Random Forests, and ensemble methods. Includes an interactive dashboard for indie developers to optimize game parameters.",
      category: "ai-ml",
      technologies: ["Python", "Machine Learning", "Jupyter Notebooks", "NLP", "Pandas", "NumPy", "Scikit-learn", "Web Scraping", "Data Analysis", "Random Forest", "Linear Regression", "Streamlit"],
      github: "https://github.com/Kavindu03-dev/Video-Game-Success-Prediction",
      live: "https://videogame.streamlit.app/",
      status: "Completed",
      year: "2025"
    }
  ];


  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">
            Explore my projects and see how I apply various technologies to solve real-world problems.
          </p>
        </div>

        <div className="projects-list">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-meta">
                  <div className="project-status">
                    <span className="status-badge">{project.status}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
                {project.live !== "#" && (
                  <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/Kavindu03-dev" className="cta-button" target="_blank" rel="noopener noreferrer">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
