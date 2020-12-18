import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';

function Movie(props) {
    const [detailsDisplay, setDetailsDisplay] = useState(false);
    
    const handleMovieDetailDisplay = () => {
        setDetailsDisplay(!detailsDisplay);
        props.overlayCallback(!props.overlayState)
    };

    const saveMovieToNominations = () => {
        props.nominateMovie(props.data);
        handleMovieDetailDisplay()
    };

    let nominationButton = props.nominations.length === 5 ? <p id="max-nomination-message">*Maximum nominations reached. Remove a movie to nominate another</p> : 
        <button
            id="save-movie-button"
            type="submit"
            style={{display: (props.nominations.hasOwnProperty(props.data.Title) ? "none" : "")}}
            onClick={() => saveMovieToNominations()}>
            Nominate
        </button>;

    return (
        <>
        <div className="movie-details" style={{display: (detailsDisplay ? '' : 'none')}}>
            <div className="movie-details-header-group">
                <img id="movie-details-poster" src={props.data.Poster} alt="Poster"/>
                <div className="movie-header-details">
                    <FaTimes id="movie-details-exit-icon" onClick={() => handleMovieDetailDisplay()}/>
                    <p id="movie-details-title">Title: {props.data.Title}</p>
                    <p id="movie-details-year">Year: {props.data.Year}</p>
                    { nominationButton }
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

///// banner when 5 nominees have been added
// remove nominate button if movie has been nominated
//unfuck the api calls query state is fuckedclear
