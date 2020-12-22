import React, { useState, useEffect } from 'react';
import './Search.css'

function Search(props) {
    const API_KEY = process.env.REACT_APP_OMDB_KEY;
    const [query, setQuery] = useState("");
    const [queryFinal, setQueryFinal] = useState("");
    const { movieDataCallback } = props;

    useEffect(() => {
        const timeOutId = setTimeout(() => setQueryFinal(query), 500);
        return () => clearTimeout(timeOutId)
    }, [query]);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&type=movie&s=${queryFinal}`)
        .then(res => res.json())
        .then(result => movieDataCallback(result.Search))
    }, [queryFinal, movieDataCallback, API_KEY]);

    return(
        <input className="search-input" placeholder="Search movies..." value={ query } onChange={ e => setQuery(e.target.value) } />
    )
}

export default Search;

