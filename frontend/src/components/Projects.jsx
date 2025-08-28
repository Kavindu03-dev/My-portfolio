import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "My Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js and Vite. Features dark blue theme, smooth animations, and showcases AI/ML skills and projects with original logos.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      category: "web-development",
      technologies: ["React", "JavaScript", "CSS", "Vite", "HTML"],
      github: "https://github.com/Kavindu03-dev/My-portfolio",
      live: "#"
    },
    {
      id: 2,
      title: "Computer Parts Management System",
      description: "A comprehensive Java-based management system for computer parts inventory. Features database management, user interface, and efficient tracking of computer components.",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
      category: "java-development",
      technologies: ["Java", "Database", "OOP", "Management System"],
      github: "https://github.com/Kavindu03-dev/Computer-parts-management-system",
      live: "#"
    },
    {
      id: 3,
      title: "Driving School Management System",
      description: "A JavaScript-based management system for driving schools. Handles student records, scheduling, instructor management, and course tracking.",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop",
      category: "web-development",
      technologies: ["JavaScript", "Management System", "Database", "Web App"],
      github: "https://github.com/Kavindu03-dev/driving-school-management",
      live: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'java-development', label: 'Java Development' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                    {project.live !== "#" && (
                      <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
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
