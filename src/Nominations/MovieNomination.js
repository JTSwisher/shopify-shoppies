function MovieNomination(props) {
    const { removeNomination, data } = props;

    const removeNominationCallback = (id) => {
        removeNomination(id)
    }
   
    return (
        <div className="nomination-details">
            <div className="movie-details-header-group">
                <img id="movie-details-poster" src={ data.Poster } alt="Poster"/>
                <div className="movie-header-details">
                    <p id="movie-details-title">Title: { data.Title }</p>
                    <p id="movie-details-year">Release Year: { data.Year }</p>
                    <button id="remove-nomination-button" onClick={() => removeNominationCallback(data.imdbID)}>Remove</button>
                </div>
            </div>
         </div>
    )
}

export default MovieNomination;