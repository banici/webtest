import React from 'react';
import './App.css';
import About from './About/About';
import Slide from './Slide/Slide';
import Contact from './Contact/Contact';



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
      
      
      <hr />
      
      <footer className="footer">
        <h1>some text here</h1>
      </footer>
      </div>



// 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




  );
}

export default App;


