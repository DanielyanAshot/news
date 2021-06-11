import { Card } from 'antd';
import { Image } from 'antd';

import './singleArticle.scss';

const SingleArticle = ({ article }) => (
  <Card>
    <Card.Meta avatar={<Image src={article.urlToImage} />} title={article.author} description={article.publishedAt} />
  </Card>
);

export default SingleArticle;
