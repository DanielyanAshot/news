import './styles.scss';
import { Link } from 'react-router-dom';
import { languagesAll, countries } from '../countriesAndLanguages';

const SingleNewsSource = ({ source }) => (
  <Link to={`/search?sources=${source.id}`} className="SingleNewsSource">
    <p>{source.name}</p>
    <p>{source.description}</p>
    <p>{countries[source.country.toUpperCase()].name}</p>
    <p>{languagesAll[source.language].name}</p>
  </Link>
);

export default SingleNewsSource;
