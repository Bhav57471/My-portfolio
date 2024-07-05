import React from 'react';
import Typed from 'typed.js';
import { useEffect,useRef } from 'react';
import './Home.css';

function Home() {
    useEffect(() => {
        document.title = "Bhavana's Portfolio"; // Set your desired title here
      }, []);
    const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Frontend Developer.'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed.js instance when component unmounts to prevent memory leaks
      typed.destroy();
    };
  }, []);
  return (
    <section id="home" className="home-section">
      <div className="leftsection">
        <p className="intro" style={{fontSize:"1.9rem"}}>Hi, I'm <span className="purple">Alluri Bhavana</span></p>
        <p className="main-text" style={{fontSize:"1.9rem",color:"rgb(28, 56, 66)"}}>
          <span id="element" className="type-element" ref={typedElement}></span>
        </p>        
        <p className="description-text">I am a 4th-year B.Tech student at St.Peter's Engineering College, passionate about web development.</p>
        <button className="button"><a className='text' href="mailto:alluribhavanabhavana.com">Hire me!</a></button>
        <button className="button"><a className='text' href="https://drive.google.com/file/d/1R0eWvGWXRoZLzQXh_HFtN6r8-wLuhH15/view?usp=sharing" target="_blank">My Resume</a></button>
      </div>
      <div className="rightsection">
        <img src='/Images/developer.jpg' alt="Developer" />
      </div>
    </section>
  );
}

export default Home;
