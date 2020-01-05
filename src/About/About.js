import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <div className="AboutContainer">
      
      <div className="PictureBox">
      <img className="imagePortrait" src={require(`../Images/webPic.png`)} alt="" />
      </div>

      <div className="PresentationBox">
        <p id="presentationText">
        Mitt namn är Ilija Banic och jag är färdigutbildad .NET utvecklare 
        som jag studerat på Teknikhögskolan i Göteborg. Mitt kompetensområde 
        ligger främst inom Backend som låg i fokus under utbildningen gång. 
        Jag har även praktisk erfarenhet från praktikplatser som gett mig 
        drivet att utvecklas ännu mer och bli en bättre programmerare!
        </p>
      </div>

      <div className="PresentationBox2">
        <p id="presentationText">
        Teknikhögskolan är en yrkeshögskola belägen i centrala Göteborg och har 
        funnits sedan 2009. Skolan har olika inriktningar varav en är IT fokuserad 
        och formad utifrån arbetsmarknadens behov. Under utbildning erbjuds teoretisk 
        utbildning i kombination med praktiska samarbeten med näringslivet.
        </p>
      </div>

      <div className="PictureBox2">
      <img className="imageSchool" src={require(`../Images/thskolan1.png`)} alt="" />
      </div>



    </div>
  );
}

export default About;
