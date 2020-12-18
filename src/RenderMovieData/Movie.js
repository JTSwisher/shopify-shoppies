import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';

function Movie(props) {
    const [display, setDisplay] = useState(false);

    const handleMovieDetailDisplay = () => {
        setDisplay(!display);
        props.overlayCallback(!props.overlayState)
    };

    return (
        <>
        <div className="movie-details" style={{display: (display ? '' : 'none')}}>
            <div className="movie-details-header-group">
                <img id="movie-details-poster" src={props.data.Poster} alt="Poster"/>
                <div className="movie-header-details">
                    <FaTimes id="movie-details-exit-icon" onClick={() => handleMovieDetailDisplay()}/>
                    <p id="movie-details-title">Title: {props.data.Title}</p>
                    <p id="movie-details-year">Year: {props.data.Year}</p>
                    <button id="save-movie-button" type="submit" onClick={() => props.handleNomination(props.data)}>Nominate</button>
                </div>
            </div>
        </div>
        <div className="movie">
            <p id="movie-title">{(props.data.Title.length >= 20) ? `${props.data.Title.slice(0,20)}...` : props.data.Title}</p>
            <img id="poster" src={ props.data.Poster } alt="Poster" onClick={() => handleMovieDetailDisplay()}/>
        </div>
        </>
    )
}

export default Movie;

