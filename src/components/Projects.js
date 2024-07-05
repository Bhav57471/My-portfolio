import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Cosmos-Gadgets-</h3>
          <p>Welcome to our Cosmos-Gadgets website, your hub for cutting-edge electronics. Explore and purchase the latest gadgets while staying informed with up-to-date information and expert reviews. Your ultimate destination for all things tech awaits!</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Tools used :</b> HTML, CSS ,React-js, springboot ,Mysql.</p>
        
          <h3>Campusbuzz-</h3>
          <p>CampusBuzz creates a mobile app to centralize college events, enhancing student experience by offering easy access to academic, social, career, and cultural activities. It enriches campus life, empowering students to make the most of their college years and fostering a vibrant community!</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Tools used :</b>  Flutter,HTML ,Mysql</p>
        </div>
      </div>
    </section>
  )
}

export default Projects;
