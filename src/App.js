import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search/Search';
import RenderMovieData from './RenderMovieData/RenderMovieData';
import Nominations from './Nominations/Nominations';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [userNominations, setUserNominations] = useState({});
  const [userNominationsIsDisplayed, setUserNominationsIsDisplayed] = useState(false);

  useEffect(() => {
    if (Object.keys(userNominations).length === 5) {
      setUserNominationsIsDisplayed(userNominationsIsDisplayed => !userNominationsIsDisplayed)
    }
  }, [userNominations]);

  const setMovieDataCallback = (data) => {
    console.log(data)
      setMovieData(data)
  };

  const setUserNominationCallback = (data) => {
      setUserNominations({...userNominations, [data.imdbID]: data})
  };

  const removeUserNominationCallback = (id) => {
    let temporaryNominationsState = {...userNominations};
    delete temporaryNominationsState[id]
    setUserNominations(temporaryNominationsState)
  };

  const handleNominationsDisplay = () => {
    setUserNominationsIsDisplayed(!userNominationsIsDisplayed)
  };

  let movieDataDisplay = !movieData ? null :
  <RenderMovieData
      data={ movieData }
      nominations={ userNominations }
      nominationsIsDisplayed={ userNominationsIsDisplayed }
      nominateMovieCallback={ setUserNominationCallback } />

  return (
      <>
          <div className="header">
            <h1 id="header-title">Shopify Shoppies</h1>
            <Search movieDataCallback={ setMovieDataCallback } />
            <button id="header-button" onClick={ handleNominationsDisplay }>Nominations</button>
          </div>
          <Nominations
              isDisplayed={ userNominationsIsDisplayed }
              setIsDisplayedCallback={ setUserNominationsIsDisplayed }
              nominations={ userNominations }
              removeNomination={ removeUserNominationCallback }
          />
          { movieDataDisplay }
      </>
  );
}

export default App;
