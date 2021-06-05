import { useSelector } from 'react-redux';
import { selectSources } from './store/slices/sources';

const Main = () => {
  const sources = useSelector(selectSources);

  console.log(sources);

  return (
    <div className="loadingScreen">
      <div className="loader"></div>
      <span className="loading">Loading ...</span>
    </div>
  );
};

export default Main;
