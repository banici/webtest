import React from 'react';
import './EducationPresentation.css';
import TextFileReader from '../../TextFileReader';
import jsonList from '../../TextFiles/Sv-listCourses';


function EducationPresentation() {

var myTxt = require("../../TextFiles/Sv-utbildningsText.txt");

const nameList = jsonList.map(name => {
  return (
    <li>{name.name}</li>
  )
})

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
              {nameList}
            </ol>
        </div>
      </div>

  );
}

export default EducationPresentation;