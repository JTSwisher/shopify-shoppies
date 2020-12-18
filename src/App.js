import React, { useState } from 'react';
import './App.css';
import Search from './Search/Search';
import RenderMovieData from './RenderMovieData/RenderMovieData';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [userNominations, setUserNominations] = useState([]);

  const setMovieDataCallback = (data) => {
    setMovieData(data)
  };

  const setUserNominationCallback = (data) => {
    setUserNominations([...userNominations, data])
  }

  let movieDataDisplay = movieData ? <RenderMovieData data={movieData} handleNomination={ setUserNominationCallback }/> : null
  return (
    <>
      <Search movieDataCallback={ setMovieDataCallback }/>
      { movieDataDisplay }
    </>
  );
}

export default App;
