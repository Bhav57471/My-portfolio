import React from 'react';
import './Biography.css';

function Biography() {
  return (
    
    <section id="biography" className="biography-section">
                <h2 style={{color:"black",textAlign:"center"}}>Biography</h2>

      <div className="card">
        <p>I am a 4th-year B.Tech student passionate about web development... I've been
        building dynamic and responsive websites for the past few years, tackling various projects that have
        taught me a lot. I love working with different people and learning from new experiences. I'm excited
        to use my skills to create amazing web projects and grow as a developer.
        </p>
        <ul>
          <li><b>Name:</b> Alluri Bhavana </li>
          <li><b>Birthday:</b> 23-Aug-2003 </li>
          <li><b>Age:</b> 20 Years </li>
          <li><b>Address:</b> Secunderabad, Hyderabad, Telangana.</li>
          <li><b>Phone:</b> (+91)8297254597 </li>
          <li><b>Email:</b> alluribhavanabhavana@gmail.com </li>
        </ul>
      </div>
    </section>
  );
}

export default Biography;
