import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>Resume</h2>
        <div className="resume-content">
          
          <div className="resume-section">
            <h3>Experience</h3>
            <div className="experience-item">
              <div className="experience-header">
                <h4>Full Stack Developer</h4>
                <span className="company">Your Company Name</span>
                <span className="date">2023 - Present</span>
              </div>
              <ul>
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with design team to implement responsive user interfaces</li>
                <li>Optimized application performance and improved user experience</li>
                <li>Implemented RESTful APIs and database management</li>
              </ul>
            </div>
            
            <div className="experience-item">
              <div className="experience-header">
                <h4>Frontend Developer</h4>
                <span className="company">Previous Company</span>
                <span className="date">2022 - 2023</span>
              </div>
              <ul>
                <li>Built responsive web applications using modern JavaScript frameworks</li>
                <li>Collaborated with UX/UI designers to implement pixel-perfect designs</li>
                <li>Ensured cross-browser compatibility and mobile responsiveness</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3>Education</h3>
            <div className="education-item">
              <div className="education-header">
                <h4>Bachelor of Technology in Computer Science</h4>
                <span className="school">Your University Name</span>
                <span className="date">2019 - 2023</span>
              </div>
              <p>Relevant coursework: Data Structures, Algorithms, Database Management, Web Development</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>Technical Skills</h3>
            <div className="skills-categories">
              <div className="skill-category">
                <h4>Frontend</h4>
                <p>React, JavaScript (ES6+), HTML5, CSS3, SASS, Bootstrap, Material-UI</p>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <p>Node.js, Express.js, Python, RESTful APIs, GraphQL</p>
              </div>
              <div className="skill-category">
                <h4>Database</h4>
                <p>MongoDB, MySQL, PostgreSQL, Firebase</p>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <p>Git, GitHub, VS Code, Docker, AWS, Heroku, Netlify</p>
              </div>
            </div>
          </div>

          <div className="resume-download">
            <a href="#" className="btn btn-primary" download>
              Download Resume PDF
            </a>
            <small>Replace the href with your actual resume PDF link</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
