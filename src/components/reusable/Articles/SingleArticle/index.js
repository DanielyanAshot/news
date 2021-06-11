import { Card } from 'antd';
import { Image } from 'antd';

import './styles.scss';
import moment from 'moment';

const SingleArticle = ({ article }) => (
  <Card>
    <Card.Meta
      avatar={<Image width={200} src={article.urlToImage} />}
      title={article.author}
      description={moment(article.publishedAt).format('MMM d Y')}
    />
  </Card>
);

export default SingleArticle;
