import './styles.scss';
import SingleNewsSource from '../../reusable/SingleNewsSource';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSourcesThunk, selectSources } from '../../../store/slices/sources';

const SourcesPage = () => {
  const dispatch = useDispatch();
  const sources = useSelector(selectSources);
  useEffect(() => {
    dispatch(fetchSourcesThunk());
  }, [dispatch]);

  return (
    <section>
      {sources ? sources.map((source) => <SingleNewsSource source={source} key={source.id} />) : <h1>Loading...</h1>}
    </section>
  );
};

export default SourcesPage;
