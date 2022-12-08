import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
import "./SignIn.css";

const client_id = "260793162332-qs0b099qv6t4o9rl0qnosoql662j3ak6.apps.googleusercontent.com"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email Address">Email Address </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email address" placeholder="Enter your email" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit"> Sign In </button>
            </form>
            <button> Don't have an account? Register here! </button>
            
            <div id="signInButton">
                <GoogleLogin
                    clientId={client_id}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </>
    )
}

export default SignIn