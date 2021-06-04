import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getNewsInfo } from './Components/Redux/selectors';

const Main = () => {
  const sources = useSelector(getNewsInfo);

  useEffect(() => { }, []);

  if (sources?.length) {
    return (
      <BrowserRouter>
        <Header />
        <Navigation sources={sources} />
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
