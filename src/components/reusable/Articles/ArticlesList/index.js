import SingleArticle from '../SingleArticle/index';
import { orderBy } from 'natural-orderby';
import './styles.scss';

const ArticlesList = ({ articles, sortChangingState }) => {
  const sortedArticles = orderBy(articles, [(item) => item.publishedAt], sortChangingState);
  return (
    <div className="articles-list">
      {sortedArticles.map((article, index) => (
        <SingleArticle article={article} key={index} />
      ))}

      {!articles?.length && <span>No articles were found</span>}
    </div>
  );
};

export default ArticlesList;

/* Key kargavorel*/
