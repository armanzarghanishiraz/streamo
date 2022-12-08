import React, { useState, useEffect } from "react";
import './App.css';
import { gapi } from 'gapi-script'
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
      {/* <Logo /> */}
        {/* <SearchBar placeholder={"Enter movie name"} setSearchWord={setSearchWord} handleClick={handleClick} handleChange={handleChange} topMovies={topMovies}/> */}
        {/* <SearchBar placeholder={"Enter movie name"} data={MovieData}/> */}
        {/* {console.log(movies)} */}
        {/* {movies['iTunes']}
        {movies['VUDU']} */}
        {/* {JSON.stringify(movies)} */}
        {/* wrong: */}
        {/* {JSON.parse(movies)} */}
        {/* {topMovies && Object.keys(topMovies).map(function(key) {return (<div key={key}>
        {topMovies[key]}
      </div>); })} */}
    </div>
  );
}

export default App;
