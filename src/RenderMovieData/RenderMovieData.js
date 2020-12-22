import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import './RenderMovieData.css';

function RenderMovieData(props) {
    const [overlayDisplay, setOverlayDisplay] = useState(false);
    const { nominationsIsDisplayed, data, nominations, nominateMovieCallback } = props;

    useEffect(() => {
        if (nominationsIsDisplayed) setOverlayDisplay(false);
     }, [nominationsIsDisplayed]);

    let movies =  data.map((e, i) => {
       return <Movie
                data={ e }
                key={ i }
                nominations={ nominations }
                nominateMovieCallback={ nominateMovieCallback }
                nominationsIsDisplayed={ nominationsIsDisplayed }
                overlayCallback={ setOverlayDisplay }
                overlayState={ overlayDisplay } />
    });

    return (
        <>
            <div className="overlay" style={{display: (overlayDisplay ? '' : 'none')}} ></div>
            <div className="movie-container">
                { movies }
            </div>
        </>
    )
}

export default RenderMovieData;