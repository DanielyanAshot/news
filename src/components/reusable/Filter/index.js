import './styles.scss';
import { Checkbox, Row, Col, Button, Popover, Radio } from 'antd';
import { useEffect, useState } from 'react';
import { categoriesFilters, countriesFilters } from './Filters';
import { countries } from '../countriesAndLanguages';
import useQuery from '../../../hooks';
import generateQS from '../../../helpers/generateQS';

const Filter = ({ sources, onChange }) => {
  const query = useQuery();

  const [filters, setFilters] = useState({
    sources: query.sources ? [query.sources] : null,
    category: query.category || null,
    country: query.country || null,
  });

  const onChangeCheckboxes = (values) => {
    setFilters({
      ...filters,
      sources: values,
      category: null,
      country: null,
    });
  };

  const onChangeRadio = (type, e) => {
    setFilters({
      ...filters,
      [type]: e.target.value,
      sources: null,
    });
  };

  const handleClearFilters = () => {
    setFilters({
      sources: null,
      country: null,
      category: null,
    });
    onChange({});
  };

  useEffect(() => {
    console.log(query);
    const data = generateQS({ ...query, ...filters, sources: filters.sources?.join() });
    onChange({ ...data });
  }, [filters]);

  return (
    <div className="filter">
      <div>
        <div className="clear">
          <Button onClick={handleClearFilters}>Clear Filters</Button>
        </div>

        <div className="filters">
          <h1>Filter Options</h1>

          {!query.sources && (
            <div>
              <Radio.Group value={filters.category} onChange={(e) => onChangeRadio('category', e)}>
                <Popover
                  placement="rightTop"
                  title={'Countries'}
                  trigger="hover"
                  content={
                    <Row>
                      {categoriesFilters.map((category) => (
                        <Col span={8} key={category.id}>
                          <Radio value={category.name.toLowerCase()}>{category.name}</Radio>
                        </Col>
                      ))}
                    </Row>
                  }
                >
                  <Button className="hoverButton">Categories</Button>
                </Popover>
              </Radio.Group>

              <Radio.Group value={filters.country} onChange={(e) => onChangeRadio('country', e)}>
                <Popover
                  placement="rightTop"
                  title={'Countries'}
                  trigger="hover"
                  autoAdjustOverflow={false}
                  content={
                    <Row className="popoutWindow">
                      {countriesFilters.map((country) => (
                        <Col span={8} key={country.id}>
                          <Radio value={country.name}>{countries[country.name.toUpperCase()].name}</Radio>
                        </Col>
                      ))}
                    </Row>
                  }
                >
                  <Button className="hoverButton">Countries</Button>
                </Popover>
              </Radio.Group>
            </div>
          )}

          {!query.category && !query.country && (
            <Checkbox.Group value={filters.sources} onChange={onChangeCheckboxes}>
              <div>
                <br />
                <Popover
                  placement="rightTop"
                  title={'Sources'}
                  trigger="hover"
                  content={
                    <Row className="popoutWindow">
                      {sources.map((source) => (
                        <Col span={8} key={source.id}>
                          <Checkbox
                            value={source.id}
                            disabled={filters?.sources?.length === 1 && filters.sources[0] === source.id}
                          >
                            {source.name}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row>
                  }
                >
                  <Button className="hoverButton">Sources</Button>
                </Popover>
              </div>
            </Checkbox.Group>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
