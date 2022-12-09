import React, { useState } from "react";
import Axios from 'axios';
import './Register.css'
const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const [registerStatus, setRegisterStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const database = () => {
        Axios.post("http://localhost:3001/register", {name: name, email: email, pass: pass}).then((response) => {

            if (response.data.message) {
                setRegisterStatus("You successfully registered an account!")
            } else {    
                console.log(response);
                setRegisterStatus("User already existed!")
            }
        });
    }

    return (
        <div className="Register">
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name"> Full Name </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="full name" name="name" id='name' placeholder="Enter your full name" />
                </div>
                <div className="email">
                    <label htmlFor="Email Address">Email Address </label> 
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email address" placeholder="Enter your email" id="email" name="email"/>
                </div>

                <div className="password">
                    <label htmlFor="password">Password </label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                </div>
                <button className="register-button" onClick={database} type="submit"> Register </button>
            </form>
            <h1 className="status">
                {registerStatus}
            </h1>
            <div>
                <button className="sign-in"> 
                    <a href="/sign-in"> Already have an account? Sign in here! </a>
                </button>
                
            </div>
        </div>
    )
}

export default Register;