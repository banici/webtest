import React, { useState } from 'react';
import Form from '../Form/Form';
import './Contact.css';


const Contact = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);


    return(

        <div className="contactWrapper">
            <div className="contactContainer">
            <button className={isOpen ? 'btnContactOff' : 'btnContact' } onClick={toggle}>Contact</button>
            </div>

            <div className={isOpen ? 'show_Container' : 'hide_Container'} >
                {isOpen &&
                <div className="infoBox">
                        <Form click={toggle} />
                </div>}           
            </div>
        </div>
    );
}

export default Contact;

