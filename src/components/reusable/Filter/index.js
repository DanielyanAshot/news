import './styles.scss';
import { Checkbox, Row, Col, Button, Radio, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { categoriesFilters, countriesFilters } from './Filters';
import { countries } from '../countriesAndLanguages';
import useQuery from '../../../hooks';
import generateQS from '../../../helpers/generateQS';

const { TabPane } = Tabs;

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
    const data = generateQS({ ...query, ...filters, sources: filters.sources?.join() });
    onChange({ ...data });
  }, [filters]);

  return (
    <div className="filters">
      <h1>Filter Options</h1>

      <div className="G-btn">
        <Button onClick={handleClearFilters}>Clear Filters</Button>
      </div>

      <Tabs defaultActiveKey={!query.sources ? '1' : '3'}>
        <TabPane tab="Categories" key="1" disabled={query.sources}>
          <Radio.Group value={filters.category} onChange={(e) => onChangeRadio('category', e)}>
            <Row>
              {categoriesFilters.map((category) => (
                <Col span={8} key={category.id}>
                  <Radio value={category.name.toLowerCase()}>{category.name}</Radio>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </TabPane>
        <TabPane tab="Countries" key="2" disabled={query.sources}>
          <Radio.Group value={filters.country} onChange={(e) => onChangeRadio('country', e)}>
            <Row>
              {countriesFilters.map((country) => (
                <Col span={8} key={country.id}>
                  <Radio value={country.name}>{countries[country.name.toUpperCase()].name}</Radio>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </TabPane>
        <TabPane tab="Sources" key="3" disabled={!!query.category || !!query.country}>
          <Checkbox.Group value={filters.sources} onChange={onChangeCheckboxes}>
            <div>
              <br />

              <Row className="sourceWindow">
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
            </div>
          </Checkbox.Group>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Filter;
