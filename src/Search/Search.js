import React, { useState } from 'react';

function Search(props) {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState();
    const API_KEY = process.env.REACT_APP_OMDB_KEY;
    // const axios = require('axios');

    const fetchMovies = () => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`)
        .then(res => res.json())
        .then(result => setQueryResults(result.Search))
        .then(props.movieDataCallback(queryResults))
    };

    const handleInputChange = (e) => {
        setQuery(e);
        fetchMovies()
    };

    return(
        <div className="search-container">
            <form>
                <input value={query} onChange={(e) => handleInputChange(e.target.value) } />
            </form>
        </div>
    )
};

export default Search;