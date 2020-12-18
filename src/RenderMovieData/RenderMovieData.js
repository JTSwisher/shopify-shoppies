import React, { useState } from 'react';
import Movie from './Movie';
import './RenderMovieData.css';

function RenderMovieData(props) {
    const [overlayDisplay, setOverlayDisplay] = useState(false);
    let movies =  props.data.map((e, i) => {
       return <Movie
                data={e}
                key={i}
                nominations={props.nominations}
                nominateMovie={ props.nominateMovie }
                overlayCallback={setOverlayDisplay}
                overlayState={overlayDisplay}
              />
    });

    return (
        <div className="movie-container">
            <div className="overlay" style={{display: (overlayDisplay ? '' : 'none')}} ></div>
            { movies }
        </div>
    )
}

export default RenderMovieData;