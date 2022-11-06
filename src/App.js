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

  const params = {
      movieName: movie_name
  };
  const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify( params ), 
      headers: {
        'Content-Type': 'application/json'
      }
  };
  const response = fetch( 'http://0.0.0.0:2999/GetStreamingServices/', options )
      .then( response => response.json() )
      // .then( response => {
      //     // Do something with response.
          
      // });

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
  console.log(services)

  const [word, setSearchWord] = useState(undefined);
  console.log(word)

  const handleClick = () => {
    console.log("clicked")
    console.log(word)
    getServices(word).then((services) => setServices(services));
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
