import { Card } from 'antd';
import { Image } from 'antd';

import './styles.scss';

const SingleArticle = ({ article }) => (
  <Card>
    <Card.Meta
      avatar={<Image width={200} src={article.urlToImage} />}
      title={article.author}
      description={article.publishedAt}
    />
  </Card>
);

export default SingleArticle;
