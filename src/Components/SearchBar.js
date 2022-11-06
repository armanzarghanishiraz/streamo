import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

// sending data back to server using POST()

 
function SearchBar({placeholder, setSearchWord, handleClick}){

    // const [filteredData, setFilteredData] = useState([]);
    const [filteredData] = useState([]);

    const handleFilter = (event) => {


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

    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div onClick={handleClick} className="searchIcon">
                    
                    <SearchIcon/>
                </div>
            </div>
            { filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.slice(0,15).map((value, key) =>{
                    return (
                    <a className = "dataItem" href="value.link" target="_blank"> 
                        <p>{value.Title}</p>
                    </a>
                );
                })}
            </div>
            )}
        </div>
    );

}

export default SearchBar;