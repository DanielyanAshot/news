import SingleArticle from '../SingleArticle/index';

const ArticlesList = ({ articles }) => (
  <div className="ArticlesList">
    {articles.articles.map((article, index) => (
      <SingleArticle article={article} key={index} />
    ))}
    {!articles.articles[0] && <span>No articles were found</span>}
  </div>
);

export default ArticlesList;

/* Key kargavorel*/
