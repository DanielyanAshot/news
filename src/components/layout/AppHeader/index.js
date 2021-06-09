import { Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Input, Row, Col } from 'antd';
import './styles.scss';

const { Header } = Layout;

const AppHeader = () => {
  const [input, setInput] = useState(null);
  const router = useHistory();
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
      <Row className="row">
        <Col>
          <span className="header-text">NEWS</span>
        </Col>
        <Col>
          <div className="search-bar">
            {input && (
              <Input
                onKeyUp={(evt) => onPressingEnter(evt)}
                onChange={(evt) => searchSubmit(evt)}
                name="searchname"
                id="searchname"
                className="search-input"
                type="search"
              />
            )}
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
