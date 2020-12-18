import React from 'react';
import Movie from './Movie'
import './RenderMovieData.css'
function RenderMovieData(props) {
    
    let movies = props.data ? props.data.map((e, i) => <Movie data={e} key={i} />) : <h1>no movie data</h1>
    return (
        <div className="movie-container">
            { movies }
        </div>
    )
}

export default RenderMovieData;