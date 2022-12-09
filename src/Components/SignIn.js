import React, { useEffect, useState } from "react";
import { GoogleLogin } from 'react-google-login';
import "./SignIn.css";
import { gapi } from 'gapi-script';
import Axios from 'axios';

const client_id = "260793162332-qs0b099qv6t4o9rl0qnosoql662j3ak6.apps.googleusercontent.com"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [signinStatus, setSigninStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    }

    const database = () => {
        Axios.post("http://localhost:3001/sign-in", {email: email, pass: pass}).then((response) => {

            if (response.data.message) {
                setSigninStatus(response.data.message)
            } else {    
                console.log(response);
                setSigninStatus("Hello " + response.data[0].name + "!")
            }

        });
    }

    return (
        <div className="Sign-in">
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="Email Address">Email Address </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email address" placeholder="Enter your email" id="email" name="email"/>
                </div>

                <div className="password">
                    <label htmlFor="password">Password </label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                </div>
                <div>
                    <button className="signin-button" onClick={database}> Sign In </button>
                </div>
                
            </form>
            <h1 className="status">
                {signinStatus}
            </h1>
            <button className="register"> 
                <a href="/register"> Don't have an account? Register here! </a>
            </button>
            

            <div className="google" id="signInButton">
                <GoogleLogin
                    clientId={client_id}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </div>
    )
}

export default SignIn;