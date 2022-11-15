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
      "movieName": "movie_name"
  };
  console.log("the movie_name within the getservices function is " + params['movieName'])
  const options = {
      method: 'POST',
      mode: 'cors',
      // body: params,
      body: JSON.stringify( params ), 
      // body:params, 
      cache: 'no-cache',
      headers: {
        // 'Content-Type': 'application/json',
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin': '*'
      }
  };
  // console.log("got prior to fetch")
  // const response = fetch( '/GetStreamingServices/', options.movieName )
  const response = fetch("http://127.0.0.1:5000/GetStreamingServices/", options )
  // console.log("got after fetch")
      //THIS CAUSED THE ERROR
      // .then( response => response.json() )
      // console.log("this is response type: " + typeof response)
      // .then( response => {
      //     // Do something with response.
      //     console.log("this is response:" + response.text())
      // });
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

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
    console.log("this is getServices(word): ", getServices(word))
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
