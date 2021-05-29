import SingleNewsSource from '../SingleNewsSource';
import './index.scss';

const NewsSourcesList = ({ sources }) => (
  <div className='NewsSourcesList'>
    {sources.map((source) => <SingleNewsSource source={source} key={source.id} />)}
  </div>
);

export default NewsSourcesList;
