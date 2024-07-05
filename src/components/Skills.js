import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill"><img src='https://pngpix.com/images/high/java-programming-language-logo-transparent-di2vw5k4m7u6y3ht-di2vw5k4m7u6y3ht.webp'/><p>Java - Intermediate</p></div>
        <div className="skill"> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBk087XE78eS17yapVCc4m-9OS1ZTo09Vp9PQ7EwKUo4YN0qBPpEiK4BJdfIh1gjeE24&usqp=CAU'/><p>HTML - Intermediate</p></div>
        <div className="skill"><img src='https://e7.pngegg.com/pngimages/686/669/png-clipart-blue-and-white-logo-web-development-responsive-web-design-cascading-style-sheets-html-css-blue-angle-thumbnail.png'/>
        <p>CSS - Intermediate</p></div>
        <div className="skill"><img src='https://e7.pngegg.com/pngimages/832/876/png-clipart-react-full-logo-tech-companies-thumbnail.png'/><p>React - Beginner</p></div>
        <div className="skill"><img src='https://e7.pngegg.com/pngimages/114/566/png-clipart-mysql-mysql-thumbnail.png'/><p>MySQL - Intermediate</p></div>
      </div>
    </section>
  );
}

export default Skills;
