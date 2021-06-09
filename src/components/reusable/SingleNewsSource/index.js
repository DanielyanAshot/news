import './styles.scss';

const SingleNewsSource = ({ source }) => (
  <div className="SingleNewsSource">
    <div className="card-title">
      <p className="source-name">{source.name}</p>
    </div>
    <div className="card-body">
      <p>{source.description}</p>
    </div>
    <div className="card-items">
      <p>{source.country}</p>
      <p>{source.language}</p>
      <p>{source.category}</p>
    </div>
  </div>
);

export default SingleNewsSource;
