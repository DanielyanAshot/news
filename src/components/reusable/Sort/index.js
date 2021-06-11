import './index.scss';
import { Select } from 'antd';

const { Option } = Select;

const Sort = ({ changeSort }) => (
  <div className="sort">
    <Select defaultValue="SortBy" onChange={changeSort}>
      <Option value="New">New</Option>
      <Option value="Old">Old</Option>
    </Select>
  </div>
);

export default Sort;
