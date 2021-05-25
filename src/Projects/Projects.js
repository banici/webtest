import React from 'react';
import './Projects.css';




function Projects(props) {

  return (
    <div className="projectWrapper">      
        <div className="project1" id="container">     
            <a href="https://banici.github.io/HamburgerApp">  
                 <div className="projectBox1" id="containerBox">
                    <p id="projectText">HamburgerApp</p>
                    <img id="projectImg" src={require(`../Images/Burgers.jpg`)} alt="" />
                    <p>React.js</p>               
                </div> 
            </a>               
        </div>
          
        <div className="project2" id="container">
            <a href="https://github.com/banici/PricingService">
                <div className="projectBox2" id="containerBox">
                    <p id="projectText">PricingService</p>
                    <img id="projectImg" src={require(`../Images/GitLogo.png`)} alt="" />
                    <p id="projectText">Web API | C#</p>
                </div>
            </a>
        </div>

        <div className="project3" id="container">
            <a href="https://github.com/banici/CampingSweden">
                <div className="projectBox3" id="containerBox">
                    <p id="projectText">CampingSweden</p>
                    <img id="projectImg" src={require(`../Images/GitLogo.png`)} alt="" />
                    <p>Web API CRUD | C# | MVC | Swagger</p>
                </div>
            </a>
        </div>
        
      </div>
    
  );
}

export default Projects;