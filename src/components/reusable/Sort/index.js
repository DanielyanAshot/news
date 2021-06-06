import './index.scss';

const Sort = ({ changeSort }) => {
  const onSortChange = (evt) => {
    if (evt.target.value === 'Published Date') {
      changeSort('publishedAt');
    } else {
      changeSort(evt.target.value.toLowerCase());
    }
  };

  return (
    <div className="sort">
      <h4>SortBy:</h4>
      <select onChange={(evt) => onSortChange(evt)}>
        <option>Popularity</option>
        <option>Relevance</option>
        <option>Published Date</option>
      </select>
    </div>
  );
};

export default Sort;
