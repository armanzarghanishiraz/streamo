import React, { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Full Name </label>
                <input value={name} name="name" id='name' placeholder="Your Full Name" />
                <label htmlFor="Email Address">Email Address </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email address" placeholder="Enter your email" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit"> Sign In </button>
            </form>
            <button> Already have an account? Sign in here! </button>
        </>
    )
}

export default Register