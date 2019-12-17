import React from 'react';
import './Form.css';


const Form = () => {
    return(
        <div>
                <form 
                action="https://formspree.io/banic89a@hotmail.com"
                method="POST"
                >

                    <input type="text" className="nameInput" autoComplete="off" name="Name" required></input>
                    <label for="name" id="enterName">Name</label>

                    <input type="email" className="emailInput" autoComplete="off" name="ReplyTo" />
                    <label for="email" id="enterEmail">Email</label>

                <div className="msgDiv">
                    <textarea className="msgInput" name="Message"></textarea>
                    <label for="Message" id="enterMsg">Message</label>
                </div>
                    <button type="submit" className="btnSend" >send</button>
                    

                </form>

                           
           
        </div>
    )
}


export default Form;
