import './index.scss';
import { Select } from 'antd';

const { Option } = Select;

const Sort = ({ changeSort }) => (
  <div className="sort">
    <h4>SortBy:</h4>
    <Select defaultValue="New" onChange={changeSort}>
      <Option value="New">New</Option>
      <Option value="Old">Old</Option>
    </Select>
  </div>
);

export default Sort;
