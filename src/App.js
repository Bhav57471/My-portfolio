import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Biography from './components/Biography';
import Skills from './components/Skills.js';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div >
      <Header />
      <main>
        <Home />
        <Biography />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
