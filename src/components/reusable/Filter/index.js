import './index.scss';
import { Checkbox, Row, Col } from 'antd';

const Filter = () => (
  <div className="filter">
    <div className="clear">
      <button>Clear</button>
    </div>
    <div className="filters">
      <Checkbox.Group onChange={(values) => console.log(values)}>
        <Row>
          <Col span={8}>
            <Checkbox value="business">Business</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="entertainment">Entertainment</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="general">Seneral</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="health">Sealth</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="science">Science</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="sports">Sports</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="technology">Technology</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  </div>
);

export default Filter;
