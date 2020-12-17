import React, { useState } from 'react';
import './App.css';
import Search from './Search/Search';
import RenderMovieData from './RenderMovieData/RenderMovieData';

function App() {
  const [movieData, setMovieData] = useState();

  const setMovieDataCallback = (data) => {
    setMovieData(data)
  };

  return (
    <>
      <Search movieDataCallback={ setMovieDataCallback }/>
      <RenderMovieData />
    </>
  );
}

export default App;
