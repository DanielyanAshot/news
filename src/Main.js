import { useSelector } from 'react-redux';

const Main = () => {
  const sources = useSelector((state) => state);

  console.log(sources);

  return (
    <div className="loadingScreen">
      <div className="loader"></div>
      <span className="loading">Loading ...</span>
    </div>
  );
};

export default Main;
