import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Prince Dabre, a passionate full-stack developer with a love for creating 
              innovative web applications and solving complex problems through code.
            </p>
            <p>
              I specialize in modern web technologies including React, Node.js, and various databases. 
              I'm always eager to learn new technologies and take on challenging projects that push 
              the boundaries of what's possible.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-grid">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Express.js</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <p>Your Photo Here</p>
              <small>Replace this with your actual photo</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
