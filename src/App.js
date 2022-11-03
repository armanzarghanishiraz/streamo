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

async function getMovies() {
  const response = await fetch('http://0.0.0.0:2999/Sources/')
    .then(toJSON);

  return response;
}

// load movies from server
function useMovies() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    getMovies().then((movies) => setMovies(movies));
  }, []);

  return movies;
}




function App() {
  const movies = useMovies();

  if (!movies) {
    return <div>loading....</div>
  }

  return (
    <div className="App">
      <SearchBar placeholder={"Enter movie name"} data={MovieData}/>
      {/* <SearchBar placeholder={"Enter movie name"} data={MovieData}/> */}
      {console.log(movies)}
      {/* {movies['iTunes']}
      {movies['VUDU']} */}
      {JSON.stringify(movies)}
      {/* wrong: */}
      {/* {JSON.parse(movies)} */}
    </div>
  );
}

export default App;
