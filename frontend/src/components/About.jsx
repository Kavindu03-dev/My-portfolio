import React from 'react';
import './About.css';

const About = () => {
  const skillsAndTools = [
    { 
      name: 'React JS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Vite', 
      logo: 'https://vitejs.dev/logo.svg'
    },
    { 
      name: 'HTML', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'C', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    { 
      name: 'C++', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'Express.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'MySQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'TensorFlow', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    { 
      name: 'PyTorch', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
    },
    { 
      name: 'NumPy', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'
    },
    { 
      name: 'Pandas', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
    },
    { 
      name: 'Scikit-learn', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg'
    },
    { 
      name: 'OpenCV', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'
    },
    { 
      name: 'Matplotlib', 
      logo: 'https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png'
    },
    { 
      name: 'Seaborn', 
      logo: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg'
    },
    { 
      name: 'Kotlin', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
    },
    { 
      name: 'Java', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      name: 'PHP', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    { 
      name: 'Android Studio', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg'
    },
    { 
      name: 'Tailwind CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    { 
      name: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { 
      name: 'GitHub', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    { 
      name: 'Figma', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-intro-section">
            <div className="about-intro">
              <h3>Hello! I'm Kavindu Vishwajith</h3>
              <p>
                I'm a passionate AI/ML enthusiast with a deep fascination for artificial intelligence 
                and machine learning technologies. My journey in this field began with a curiosity 
                about how machines can learn and make intelligent decisions.
              </p>
              <p>
                Currently, I'm focused on developing innovative solutions using cutting-edge AI 
                technologies. I believe in the transformative power of AI to solve real-world 
                problems and create meaningful impact in various industries.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Education:</span>
                <span className="detail-value">Data Science Student at SLIIT</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Colombo, Sri Lanka</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Interests:</span>
                <span className="detail-value">AI/ML and Designing</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">3+ Years in Programming</span>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Skills and Tools</h3>
            <div className="skills-grid">
              {skillsAndTools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-logo">
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className="skill-logo-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="skill-logo-fallback" style={{ display: 'none' }}>
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">AI Models Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Learning</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Passion for AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
