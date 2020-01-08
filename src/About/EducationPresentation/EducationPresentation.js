import React from 'react';
import './EducationPresentation.css';
import {edText} from '../../TextFiles/Sv-utbildningsText.txt';




function EducationPresentation() {

  return (
    <div className="PresentationWrap">
        <div id="rubrik">
        <h1 id="rubrikText">Kvalifikationer</h1>
        </div>
        <p id="educationText">
        {edText}
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

/*Under min tid på utbildningen Fullstack Developer.Net studerade jag 
        olika processer inom system, databaser och applikationer. Under två år 
        läste jag dels hur man analyserar och skapar effektiva nya system men 
        också hur man kan säkra och förbättra befintliga. Nedan följer en 
        sammanställning på kurser jag läst:*/

export default EducationPresentation;