import React, { useState, useEffect } from "react";
import './App.css';
import { gapi } from 'gapi-script';
import HomePage from './Components/HomePage.js';
import MovieData from './Data.json';
import NavBar from './Components/NavBar.js';
import SignIn from './Components/SignIn.js';
import Register from './Components/Register.js';
// import axios from "axios";

const client_id = "260793162332-qs0b099qv6t4o9rl0qnosoql662j3ak6.apps.googleusercontent.com"


function App() {

  let component 
  switch (window.location.pathname) {
    case "/":
      component = <HomePage/>
      break
    case "/sign-in":
      component = <SignIn />
      break
    case "/register":
      component = <Register />
      break
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: client_id,
        scope: ""
      }) 
    };
    gapi.load('client:auth2', start);
  });

  return (
    <div>
      <header>
      <NavBar/>
      </header>
      <div className="App">{component}</div>
    </div>
  );
}

export default App;
