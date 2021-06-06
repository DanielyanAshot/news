import { Menu, Layout } from 'antd';
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
      <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <Row type="flex" justify="space-between" align="top">
          <Col>
            {' '}
            <Link to="/sources">
              <Menu.Item key="1">News</Menu.Item>
            </Link>
          </Col>
          <Col>
            <Menu.Item key="2">
              <Button onClick={inputVisibility}>
                <SearchOutlined />
              </Button>
              {input ? (
                <Input type="search" onChange={(evt) => searchSubmit(evt)} onKeyUp={(evt) => onPressingEnter(evt)} />
              ) : null}
            </Menu.Item>
          </Col>
        </Row>
      </Menu>
    </Header>
  );
};

export default AppHeader;
