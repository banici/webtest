import React from 'react';
import './Footer.css';




function Footer(props) {

  return (
    <div className="footerWrapper">
        <p id="footerText">{props.text}</p>
      </div>

  );
}

export default Footer;

