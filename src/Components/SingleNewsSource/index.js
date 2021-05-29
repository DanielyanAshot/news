import './index.scss';

const SingleNewsSource = ({ source }) => (
    <div className="SingleNewsSource">
        <p>{source.name}</p>
        <p>{source.description}</p>
        <p>{source.country}</p>
        <p>{source.language}</p>
        <p>{source.category}</p>
    </div>
);

export default SingleNewsSource;
