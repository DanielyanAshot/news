import './styles.scss';
import { Link } from 'react-router-dom';

const SingleNewsSource = ({ source }) => (
  <Link to={`/search?sources=${source.id}`} className="SingleNewsSource">
    <p>{source.name}</p>
    <p>{source.description}</p>
    <p>{source.country}</p>
    <p>{source.language}</p>
  </Link>
);

export default SingleNewsSource;
