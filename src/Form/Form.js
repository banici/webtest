import React from 'react';
import './Form.css';


const Form = () => {
    return(
        <div>
                <form 
                action="https://formspree.io/martin.krak@mail.com"
                method="POST"
                >

                    <input type="text" className="nameInput" name="Name" ></input>
                    <label for="name" id="enterName">Name</label>

                    <input type="text" className="emailInput" name="ReplyTo" />

                    <textarea className="msgInput" name="Message"></textarea>

                    <button type="submit" className="btnSend" >send</button>

                </form>

                           
           
        </div>
    )
}



export default Form;
