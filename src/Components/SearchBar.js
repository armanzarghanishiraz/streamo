import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import Axios from "axios";
// sending data back to server using POST()

 
function SearchBar({placeholder, setSearchWord, handleClick, handleChange, topMovies}){

    // const [filteredData, setFilteredData] = useState([]);
    const [filteredData] = useState([]);

    const handleFilter = (event) => {

        // calls setSearchWord() on the inputted word
        const searchWord = event.target.value;
        setSearchWord(searchWord);
        // const newFilter = data.filter((value) => {
        //     const output_string = value.Title.toLowerCase().includes(searchWord.toLowerCase());

    // if (searchWord == "") {
    //     setFilteredData([]);
    // } else {
    //     setFilteredData(newFilter);
    // }

        return searchWord
    };

    // post request
    // const params = {
    //     param1: handleFilter 
    // };
    // const options = {
    //     method: 'POST',
    //     body: JSON.stringify( params )  
    // };
    // fetch( 'http://0.0.0.0:2999/Sources/', options )
    //     .then( response => response.json() )
    //     .then( response => {
    //         // Do something with response.
    //     } );
    // const [movieName, setMovieName] = useState("");

    // const movie_search = () => {
    //     Axios.post("http://localhost:3001/api/insert", {movieName: movieName}).then(() => { alert("succesfull search"); });
    // }

    return(
        <div className="search">
            <div className="searchInputs">
                {/* when search bar is changed, call handleChange function */}
                <input type="text" placeholder={placeholder} onMouseDown={handleChange} onChange={(handleFilter)}/>
                {/* when search bar is clicked, call handleclick function */}
                <div onClick={handleClick} className="searchIcon">
                    
                    <SearchIcon/>
                </div>
            </div>
            <div className="dataResult" >
                <div> {topMovies && Object.keys(topMovies).map(function(key) {return (<div key={key}>
                {topMovies[key]}
                </div>); })} </div>
            </div>
        </div>
    );

}

export default SearchBar;