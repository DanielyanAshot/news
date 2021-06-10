import './styles.scss';
import { Link } from 'react-router-dom';
import { languagesAll, countries } from '../countriesAndLanguages';

const SingleNewsSource = ({ source }) => (
  <Link to={`/search?sources=${source.id}`} className="SingleNewsSource">
    <div className="SingleNewsSource">
      <div className="card-title">
        <p className="source-name">{source.name}</p>
      </div>
      <div className="card-body">
        <p>{source.description}</p>
      </div>
      <div className="card-items">
        <p>{countries[source.country.toUpperCase()].name}</p>
        <p>{languagesAll[source.language].name}</p>
        <p>{source.category}</p>
      </div>
    </div>
  </Link>
);

export default SingleNewsSource;
