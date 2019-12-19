import React from 'react';
import './Form.css';


const Form = () => {


    return(
        <div className="formDiv">
                <form 
                action="https://formspree.io/banic89a@hotmail.com"
                method="POST"
                >

                    <input type="text" 
                    placeholder="Name" 
                    className="nameInput" 
                    autoComplete="off" 
                    name="Name" 
                    required />
                   
                    <label for="name" id="enterName">Name</label>
                
                <div className="emailDiv">
                    <input type="email"
                    placeholder="Email" 
                    className="emailInput" 
                    autoComplete="off" 
                    name="ReplyTo" 
                    required />
                    <div id="float_email_lbl">
                        <label for="email" id="enterEmail">Email</label>
                    </div>
                </div>
                
                <div className="msgDiv">
                    <textarea className="msgInput" 
                    placeholder="Message" 
                    name="Message"></textarea>
                        <div id="float_msg_lbl">
                            <label for="Message" id="enterMsg">Message</label>
                        </div>
                </div>
                    <button type="submit" className="btnSend" >send</button>
                    

                </form>

                           
           
        </div>
    )
}


export default Form;
