import './index.scss';
import { Checkbox, Row, Col } from 'antd';
import { categoriesFilters, countriesFilters, Fetch } from './Filters';
import { countries } from '../countriesAndLanguages';

const Filter = () => {
  const sources = Fetch();
  return (
    <div className="filter">
      <div className="clear">
        <button>Clear</button>
      </div>
      <div className="filters">
        <Checkbox.Group onChange={(values) => console.log(values)}>
          <span>Categories</span>
          <Row>
            {categoriesFilters.map((categorie) => (
              <Col span={8} key={categorie.id}>
                <Checkbox value={categorie.name.toLowerCase()}>{categorie.name}</Checkbox>
              </Col>
            ))}
          </Row>
          <br />
          <br />
          <span>Countries</span>
          <br />
          <Row>
            {countriesFilters.map((country) => (
              <Col span={8} key={country.id}>
                <Checkbox value={country.name}>{countries[country.name.toUpperCase()].name}</Checkbox>
              </Col>
            ))}
          </Row>
          <br />
          <br />
          <span>Sources</span>
          <br />
          <Row>
            {sources.map((source) => (
              <Col span={8} key={source.id}>
                <Checkbox value={source.id}>{source.name}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default Filter;
