import React, { useState } from "react";
import Axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const database = () => {
        Axios.post("http://localhost:3001/register", {name: name, email: email, pass: pass}).then((response) => {
            console.log(response);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Full Name </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="full name" name="name" id='name' placeholder="Your Full Name" />
                <label htmlFor="Email Address">Email Address </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email address" placeholder="Enter your email" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button onClick={database} type="submit"> Register </button>
            </form>
            <div>
                <button> 
                    <a href="/sign-in"> Already have an account? Sign in here! </a>
                </button>
                
            </div>
        </>
    )
}

export default Register