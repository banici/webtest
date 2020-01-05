import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <div className="AboutContainer">
      
      <div className="PictureBox">
      <img className="imagePortrait" src={require(`../Images/webPic.png`)} alt="" />
      </div>

      <div className="PresentationBox">
        <p>Mitt namn är Ilija och jag är 30 år gammal. The end.
        </p>
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
