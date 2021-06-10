import SingleArticle from '../SingleArticle/index';
import { orderBy } from 'natural-orderby';

const ArticlesList = ({ articles, sortChangingState }) => {
  const sortedArticles = orderBy(articles, [(item) => item.publishedAt], sortChangingState);
  return (
    <div className="ArticlesList">
      {sortedArticles.map((article, index) => (
        <SingleArticle article={article} key={index} />
      ))}
      {!articles[0] && <span>No articles were found</span>}
    </div>
  );
};

export default ArticlesList;

/* Key kargavorel*/
