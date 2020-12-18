import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';

function Movie(props) {
    const [detailsDisplay, setDetailsDisplay] = useState(false);
    const { data, nominations, nominateMovie, overlayCallback, overlayState } = props;
    
    const handleMovieDetailDisplay = () => {
        setDetailsDisplay(!detailsDisplay);
        overlayCallback(!overlayState)
    };

    const saveMovieToNominations = () => {
        nominateMovie(data);
        handleMovieDetailDisplay()
    };

    let nominationButton = Object.keys(nominations).length === 5 ? <p id="max-nomination-message">*Maximum nominations reached. Remove a movie to nominate another</p> : 
        <button
            id="save-movie-button"
            type="submit"
            style={{display: (nominations.hasOwnProperty(data.Title) ? "none" : "")}}
            onClick={() => saveMovieToNominations()}>
            Nominate
        </button>;

    return (
        <>
        <div className="movie-details" style={{display: (detailsDisplay ? '' : 'none')}}>
            <div className="movie-details-header-group">
                <img id="movie-details-poster" src={data.Poster} alt="Poster"/>
                <div className="movie-header-details">
                    <FaTimes id="movie-details-exit-icon" onClick={() => handleMovieDetailDisplay()}/>
                    <p id="movie-details-title">Title: {data.Title}</p>
                    <p id="movie-details-year">Year: {data.Year}</p>
                    { nominationButton }
                </div>
            </div>
        </div>
        <div className="movie">
            <p id="movie-title">{(data.Title.length >= 20) ? `${data.Title.slice(0,20)}...` : data.Title}</p>
            <img id="poster" src={ data.Poster } alt="Poster" onClick={() => handleMovieDetailDisplay()}/>
        </div>
        </>
    )
}

export default Movie;
