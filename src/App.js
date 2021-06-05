import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from './Main';
import { fetchSourcesThunk } from './store/slices/sources';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSourcesThunk());
  }, []);

  return <Main />;
}

export default App;
