import './index.scss';
import { Checkbox, Row, Col, Button, Popover } from 'antd';
import { useState } from 'react';
import { categoriesFilters, countriesFilters } from './Filters';
import { countries } from '../countriesAndLanguages';
import { selectSources } from '../../../store/slices/sources';
import { useSelector } from 'react-redux';

const Filter = ({ categoryFilter, countryFilter, sourceFilter, category, source, country }) => {
  const sources = useSelector(selectSources);
  const [sourcesChecked, setSourcesChecked] = useState(false);
  const [categoriesChecked, setCategoriesChecked] = useState(false);
  const [countriesChecked, setCountriesChecked] = useState(false);
  const checkboxChanger = (e, type) => {
    if (type === 'category') {
      setCategoriesChecked(e.target.value);
      if (e.target.checked) {
        categoryFilter(e.target.value);
      } else {
        setCategoriesChecked(false);
        categoryFilter(false);
      }
    } else if (type === 'country') {
      setCountriesChecked(e.target.value);
      if (e.target.checked) {
        countryFilter(e.target.value);
      } else {
        countryFilter(false);
        setCountriesChecked(false);
      }
    } else if (type === 'source') {
      setSourcesChecked(e.target.value);
      if (e.target.checked) {
        sourceFilter(e.target.value);
      } else {
        setSourcesChecked(false);
        sourceFilter(false);
      }
    }
  };

  return (
    <div className="filter">
      <div>
        <div className="clear">
          <Button>Clear Filters</Button>
        </div>

        <div className="filters">
          <Checkbox.Group>
            <h1>Filter Options</h1>
            {!source && (
              <div>
                <Popover
                  placement="rightTop"
                  title={'Countries'}
                  trigger="hover"
                  content={
                    <Row>
                      {categoriesFilters.map((category) => (
                        <Col span={8} key={category.id}>
                          <Checkbox
                            disabled={categoriesChecked && categoriesChecked !== category.name.toLowerCase()}
                            value={category.name.toLowerCase()}
                            onChange={(e) => checkboxChanger(e, 'category')}
                          >
                            {category.name}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row>
                  }
                >
                  <Button>Categories</Button>
                </Popover>
                <br />
                <br />
                <Popover
                  placement="rightTop"
                  title={'Countries'}
                  trigger="hover"
                  content={
                    <Row>
                      {countriesFilters.map((country) => (
                        <Col span={4} key={country.id}>
                          <Checkbox
                            disabled={countriesChecked && countriesChecked !== country.name}
                            onChange={(e) => checkboxChanger(e, 'country')}
                            value={country.name}
                          >
                            {countries[country.name.toUpperCase()].name}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row>
                  }
                >
                  <Button>Countries</Button>
                </Popover>
              </div>
            )}
            {!category && !country && (
              <div>
                <br />
                <Popover
                  placement="rightTop"
                  title={'Sources'}
                  trigger="hover"
                  content={
                    <Row>
                      {sources.map((source) => (
                        <Col span={4} key={source.id}>
                          <Checkbox
                            disabled={sourcesChecked && sourcesChecked !== source.id}
                            onChange={(e) => checkboxChanger(e, 'source')}
                            value={source.id}
                          >
                            {source.name}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row>
                  }
                >
                  <Button>Sources</Button>
                </Popover>
              </div>
            )}
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
};

export default Filter;
