import React from 'react';
import './About.css';
import TextFileReader from '../TextFileReader';

const About = (props) => {

  var myTxt = require("../TextFiles/Sv-presentationMe.txt");
  var schoolTxt = require("../TextFiles/Sv-presentationSchool.txt");

  return (
    <div className="AboutContainer">
      
      <div className="PictureBox">
      <img className="imagePortrait" src={require(`../Images/webPic.png`)} alt="" />
      </div>

      <div className="PresentationBox">
        <p id="presentationText">
        <TextFileReader txt={myTxt} />
        </p>
      </div>

      <div className="PresentationBox2">
        <p id="presentationText">
        <TextFileReader txt={schoolTxt} />
        </p>
      </div>

      <div className="PictureBox2">
      <img className="imageSchool" src={require(`../Images/thskolan1.png`)} alt="" />
      </div>



    </div>
  );
}

export default About;
