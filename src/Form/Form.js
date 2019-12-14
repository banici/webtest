import React, {useState} from 'react';
import './Form.css';
import { send } from 'q';


const Form = (props) => {


    const [emailState, setEmailState] = useState({
        email: [
            {recipient: ''},
            {sender: ''},
            {text: ''}
        ]
    })

    const {email} = emailState;


    const sendEmail = () => {
        setEmailState({
            email: [
                {recipient: emailState.recipient},
                {sender: emailState.sender},
                {text: emailState.text}
            ]
        })
        fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
    }

    const buttonFuncs = () => {
        props.click();
        sendEmail();
    }

    return (

        <div className="formWrap">
            <form id="formContainer" autoComplete="off">
                <input type="text" className="nameInput" name="name" value={email.recipient}
                onChange={e => sendEmail({ email: {...email, recipient: e.target.value} })}></input>
                <label for="name" id="enterName">Name</label>
                <input type="text" className="emailInput" value={email.sender}
                onChange={e => sendEmail({ email: {...email, sender: e.target.value} })}></input>
                <textarea className="msgInput"></textarea>
                <button type="submit" className="btnSend" onClick={buttonFuncs} value={email.text}
                onChange={e => sendEmail({ email: {...email, text: e.target.value} })}>send</button>
            </form>
        </div>
    );
}

export default Form;


// hello

// nice 2 c u!

// goodbye!

// new comment
