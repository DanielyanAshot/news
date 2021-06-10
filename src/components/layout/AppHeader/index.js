import { Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Input, Button, Row, Col } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  const router = useHistory();
  const [input, setInput] = useState(false);
  const [inputText, setInputText] = useState();
  const searchSubmit = (evt) => {
    setInputText(evt.target.value);
  };
  const inputVisibility = () => {
    setInput(!input);
    if (!!inputText) {
      router.push(`/search?q=${inputText}`);
    }
  };
  const onPressingEnter = (evt) => {
    if ((evt.code === 'NumpadEnter' || evt.code === 'Enter') && !!evt.target.value) {
      setInput(!input);
      router.push(`/search?q=${evt.target.value}`);
    }
  };
  return (
    <Header>
      <Row type="flex" justify="space-between" align="top">
        <Link to="/sources">
          <Col>
            <p style={{ color: 'blue', border: 0, fontSize: 20, fontWeight: 'bold' }}>News Sources</p>
          </Col>
        </Link>
        <Col>
          <Button onClick={inputVisibility}>
            <SearchOutlined />
          </Button>
          {input && (
            <Input onKeyUp={(evt) => onPressingEnter(evt)} onChange={(evt) => searchSubmit(evt)} type="search" />
          )}
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
