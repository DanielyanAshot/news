import { Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Input, Row, Col } from 'antd';
import './styles.scss';

const { Header } = Layout;

const AppHeader = () => {
  const [input, setInput] = useState(null);
  const inputVisibility = () => {
    setInput(!input);
  };
  return (
    <Header>
      <Row className="row">
        <Col>
          <span className="header-text">NEWS</span>
        </Col>
        <Col>
          <div className="search-bar">
            {input ? <Input name="searchname" id="searchname" className="search-input" type="search" /> : null}
            <label htmlFor="searchname">
              <SearchOutlined onClick={inputVisibility} />
            </label>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
