import './styles.scss';
import SingleNewsSource from '../../reusable/SingleNewsSource';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSourcesThunk, selectSources } from '../../../store/slices/sources';
import { Card, Row, Col } from 'antd';
import { Spin } from 'antd';

const SourcesPage = () => {
  const dispatch = useDispatch();
  const sources = useSelector(selectSources);
  useEffect(() => {
    dispatch(fetchSourcesThunk());
  }, []);

  return (
    <section className="NewsSourcesList">
      <h1 className="sources-general-text">SOURCES</h1>
      <Row gutter={44}>
        {sources ? (
          sources.map((source) => (
            <Col key={source.id} span={8}>
              <Card>
                <SingleNewsSource source={source} key={source.id} />
              </Card>
            </Col>
          ))
        ) : (
          <div className="example">
            <Spin />
          </div>
        )}
      </Row>
    </section>
  );
};

export default SourcesPage;
