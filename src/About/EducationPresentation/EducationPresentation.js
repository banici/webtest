import React from 'react';
import './EducationPresentation.css';
import TextFileReader from '../../TextFileReader';



function EducationPresentation() {

var myTxt = require("../../TextFiles/Sv-utbildningsText.txt");

  return (
    <div className="PresentationWrap">
        <div id="rubrik">
        <h1 id="rubrikText">Kvalifikationer</h1>
        </div>
        <p id="educationText">
          <TextFileReader txt={myTxt} />
        </p>
        <div className="listContainer">
            <ol id="courseList">
                <li>Databaser med SQL</li>
                <li>Dataåtkomster i .NET</li>
                <li>LIA 1</li>
                <li>LIA 2</li>
                <li>Programmeringsteknik C#</li>
                <li>Utveckling i Windows molntjänster</li>
                <li>Utveckling med ramverket i .NET</li>
                <li>Webbutveckling backend</li>
                <li>Webbutveckling frontend</li>
                <li>Examensarbete</li>
            </ol>
        </div>
      </div>








  );
}


export default EducationPresentation;