import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from './Components/SearchBar.js';
import MovieData from './Data.json';
// import axios from "axios";

function toJSON(response) {
  return response.json();
}
  
// const api = axios.create({
//   baseURL: `baseURL placeholder`
// })

async function getServices(movie_name) {

  // input is the string from the search bar

  // basic post request syntax to push moviename string to the flask server
  const params = {
      movieName: movie_name
  };
  const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify( params ), 
      // cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
  };
  // console.log("got prior to fetch")
  const response = fetch( '/GetStreamingServices/', options )
  // const response = fetch( 'http://0.0.0.0:2999/GetStreamingServices/', options )
      //THIS CAUSED THE ERROR
      .then( response => response.json() )
      // console.log("this is response type: " + typeof response)
      .then( response => {
          // Do something with response.
          console.log("this is response:" + response)
      });

  return response;
}

// load movies from server
function useMovies() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    getServices().then((movies) => setMovies(movies));
  }, []);

  return movies;
}


function App() {

  const [services, setServices] = useState(undefined);
  console.log("these are services: " + services)

  const [word, setSearchWord] = useState(undefined);
  console.log("this is word: " + word)

  // called when searchbar icon is clicked, and calls getServices on the input string
  const handleClick = () => {
    console.log("clicked")
    console.log("this is word 2: " + word)
    getServices(word).then((services) => setServices(services));
    // console.log("getServices suvvessful")
  }

  // const movies = useMovies();

  // if (!movies) {
  //   return <div>loading....</div>
  // }

  return (
    <div className="App">
      <SearchBar placeholder={"Enter movie name"} setSearchWord={setSearchWord} handleClick={handleClick}/>
      {/* <SearchBar placeholder={"Enter movie name"} data={MovieData}/> */}
      {/* {console.log(movies)} */}
      {/* {movies['iTunes']}
      {movies['VUDU']} */}
      {/* {JSON.stringify(movies)} */}
      {/* wrong: */}
      {/* {JSON.parse(movies)} */}
    </div>
  );
}

export default App;
