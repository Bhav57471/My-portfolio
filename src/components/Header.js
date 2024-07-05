import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="left">Bhavana's Portfolio</div>
        <div className="right">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#biography">Biography</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
