import React from 'react';
import About from './Container/About/about.js';
import Footer from './Container/Footer/Footer';
import Card from './Container/Card/Card';
import Navigation from './Container/Navigation/Navigation';
import Contact from './Container/Contact/Contact';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Card />
      <About /> 
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
