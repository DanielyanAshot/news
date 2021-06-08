import './index.scss';
import { Select } from 'antd';

const { Option } = Select;

const Sort = ({ changeSort }) => {
  const onSortChange = (value) => {
    if (value === 'Published Date') {
      changeSort('publishedAt');
    } else {
      changeSort(value.toLowerCase());
    }
  };

  return (
    <div className="sort">
      <h4>SortBy:</h4>
      <Select defaultValue="Popularity" onChange={(value) => onSortChange(value)}>
        <Option value="Popularity">Popularity</Option>
        <Option value="Relevance">Relevance</Option>
        <Option value="Published Date">Published Date</Option>
      </Select>
    </div>
  );
};

export default Sort;
