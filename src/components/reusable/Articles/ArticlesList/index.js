import SingleArticle from '../SingleArticle/index';
import { orderBy } from 'natural-orderby';
import { Col, Row } from 'antd';

const ArticlesList = ({ articles, sortChangingState }) => {
  const sortedArticles = orderBy(articles, [(item) => item.publishedAt], sortChangingState);
  return (
    <div>
      <Row gutter={[16, 16]}>
        {sortedArticles.map((article, index) => (
          <Col key={index} span={24}>
            <SingleArticle article={article} key={index} />
          </Col>
        ))}
      </Row>

      {!articles?.length && <span>No articles were found</span>}
    </div>
  );
};

export default ArticlesList;

/* Key kargavorel*/
