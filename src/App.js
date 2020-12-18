import React, { useState } from 'react';
import './App.css';
import Search from './Search/Search';
import RenderMovieData from './RenderMovieData/RenderMovieData';
import Nominations from './Nominations/Nominations'

function App() {
  const [movieData, setMovieData] = useState([]);
  const [userNominations, setUserNominations] = useState({});

  const setMovieDataCallback = (data) => {
    setMovieData(data)
  };

  const setUserNominationCallback = (data) => {
    setUserNominations({...userNominations, [data.Title]: data})
  }

  let movieDataDisplay = !movieData ? null :
  <RenderMovieData data={movieData} nominations={userNominations} nominateMovie={setUserNominationCallback}/>
  
  return (
    <>
      <Search movieDataCallback={ setMovieDataCallback }/>
      { movieDataDisplay }
      <Nominations />
    </>
  );
}

export default App;
