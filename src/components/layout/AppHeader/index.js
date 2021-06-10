import { Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Input, Row, Col } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';

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
    setInputText();
    if (!!inputText) {
      const newInput = inputText;
      setInputText();
      router.push(`/search?q=${newInput}`);
    }
  };
  const onPressingEnter = (evt) => {
    if ((evt.code === 'NumpadEnter' || evt.code === 'Enter') && !!evt.target.value) {
      setInputText();
      setInput(!input);
      router.push(`/search?q=${evt.target.value}`);
    }
  };

  return (
    <Header>
      <Row className="row">
        <Link to="/sources">
          <Col>
            <span className="header-text">News Sources</span>
          </Col>
        </Link>
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
