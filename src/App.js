import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from './Main';
import { dataApi } from './store/slices';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataApi());
  }, []);

  return <Main />;
}

export default App;
