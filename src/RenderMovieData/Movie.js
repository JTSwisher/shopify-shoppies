import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'

function Movie(props) {
    const [display, setDisplay] = useState(false);

    const handleMovieDetailDisplay = () => {
        setDisplay(!display);
    };

    return (
        <>
        <div className="movie-header" style={{display: (display ? '' : 'none')}}>
            <img id="poster" src={props.data.Poster} alt="Poster"/>
            <div className="movie-header-details">
                <FaTimes id="show-details-exit-icon" onClick={() => handleMovieDetailDisplay()}/>
                <p id="movie-details-title">Title: {props.data.Title}</p>
                <p id="movie-details-year">Year: {props.data.Year}</p>
            </div>
        </div>
        <div className="movie">
            <p id="movie-title">{ props.data.Title }</p>
            <img id="poster" src={ props.data.Poster } alt="Poster" onClick={() => handleMovieDetailDisplay()}/>
        </div>
        </>
    )
}

export default Movie;