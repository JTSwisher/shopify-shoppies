import React, { useState } from 'react';
import './App.css';
import Search from './Search/Search'

function App() {
  const [movieData, setMovieData] = useState();

  const setMovieDataCallback = (data) => {
    setMovieData(data)
  }

  return (
    <>
      <Search movieDataCallback={ setMovieDataCallback }/>
    </>
  );
}

export default App;
