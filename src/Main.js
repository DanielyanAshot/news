import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';

const Main = () => {
  const [sources, setSources] = useState();

  useEffect(() => {
    fetch("https://newsapi.org/v2/sources?apiKey=d2719bc29082418883ea1aa824d3d502")
      .then(response => response.json())
      .then((response) => {
        setSources(response);
      })
  }, []);

  if (!!sources) {
    return (
      <BrowserRouter>
        <Header />
        <Navigation sources={sources.sources} />
      </BrowserRouter>
    );
  }

  return (
    <div className="loadingScreen">
      <div className="loader"></div>
      <span className="loading">Loading ...</span>
    </div>
  );
}

export default Main;