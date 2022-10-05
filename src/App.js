import React from "react";
import './App.css';
import SearchBar from './Components/SearchBar.js';
import MovieData from './Data.json';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder={"Enter movie name"} data={MovieData}/>
    </div>
  );
}

export default App;
