import './index.scss';
import { Checkbox, Row, Col, Button, Popover } from 'antd';
import { useEffect, useState } from 'react';
import { categoriesFilters, countriesFilters } from './Filters';
import { countries } from '../countriesAndLanguages';
import useQuery from '../../../hooks';

const Filter = ({ onChange, sources }) => {
  const query = useQuery();

  const [filter, setFilter] = useState({
    type: query.sources ? 'sources' : query.category ? 'category' : 'country',
    value: [query.sources || query.country || query.category],
  });

  const checkboxChanger = (e, type) => {
    const isExists = filter.value.includes(e.target.value);

    if (isExists && !e.target.checked && filter.value.length === 1) {
      return;
    }

    setFilter({
      type,
      value: isExists ? filter.value.filter((value) => value !== e.target.value) : [...filter.value, e.target.value],
    });
  };

  useEffect(() => {
    onChange(filter.type, filter.value);
  }, [filter]);

  return (
    <div className="filter">
      <div>
        <div className="clear">
          <Button>Clear Filters</Button>
        </div>

        <div className="filters">
          <Checkbox.Group value={filter.value}>
            <h1>Filter Options</h1>
            {!query.sources && (
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
                            disabled={filter.type !== 'sources' && filter.value !== category.name.toLowerCase()}
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
                  <Button className="hoverButton">Categories</Button>
                </Popover>
                <br />
                <br />
                <Popover
                  placement="rightTop"
                  title={'Countries'}
                  trigger="hover"
                  autoAdjustOverflow={false}
                  content={
                    <Row className="popoutWindow">
                      {countriesFilters.map((country) => (
                        <Col span={8} key={country.id}>
                          <Checkbox
                            disabled={filter.type === 'country' && filter.value !== country.name}
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
                  <Button className="hoverButton">Countries</Button>
                </Popover>
              </div>
            )}
            {!query.category && !query.country && (
              <div>
                <br />
                <Popover
                  placement="rightTop"
                  title={'Sources'}
                  trigger="hover"
                  content={
                    <Row className="popoutWindow">
                      {sources.map((source) => {
                        return (
                          <Col span={8} key={source.id}>
                            <Checkbox onChange={(e) => checkboxChanger(e, 'sources')} value={source.id}>
                              {source.name}
                            </Checkbox>
                          </Col>
                        );
                      })}
                    </Row>
                  }
                >
                  <Button className="hoverButton">Sources</Button>
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
