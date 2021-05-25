import React from 'react';
import './Certifications.css';




function Certifications() {

  return (
    <div className="CertificationWrapper">
        <h2 id="CertTitle">Online Courses Certifications</h2> 
        <div className="CertBox">     
            <div id="Cert1">
             <img id="CertImg" src={require(`../../Images/Cert_Basic-OOP.jpg`)} />
            </div>
            <div id="Cert2">
                <img id="CertImg" src={require(`../../Images/Cert_RESTful-API.jpg`)} />
            </div>
        </div>
    </div>

  );
}

export default Certifications;