import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <div className="AboutContainer">
      
      <div className="PictureBox">
      <h1>Picture of (Me) {props.name}</h1>
      </div>

      <div className="PresentationBox">
        <h1>Info about (Me) {props.surName}</h1>
      </div>

      <div className="PresentationBox2">
        <h1>Info aboout (School) {props.surName}</h1>
      </div>

      <div className="PictureBox2">
      <img className="imageSchool" src={require(`../Images/thskolan1.png`)} alt="" />
      </div>



    </div>
  );
}

export default About;
