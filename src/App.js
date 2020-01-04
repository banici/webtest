import React from 'react';
import './App.css';
import About from './About/About';
import Slide from './Slide/Slide';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';



function App() {

  return (
    <div className="App">
      <div className="Parallax">

      <div className="TitleContainer">
      <h1 className="Parallax-text">Ilija Banic | Junior developer | Fullstack .NET</h1>
      </div>
      
      </div>
           
      <About />
      
      <hr />
      <Slide />
      <hr />


      <Contact />
      
      <Footer text="This website is written in React.js"/>
      </div>








  );
}

export default App;


