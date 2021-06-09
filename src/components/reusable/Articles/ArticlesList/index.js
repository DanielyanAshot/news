import SingleArticle from '../SingleArticle/index';

const ArticlesList = ({ articles }) => (
  <div className="ArticlesList">
    {articles.articles.map((article, index) => (
      <SingleArticle article={article} key={index} />
    ))}
  </div>
);

export default ArticlesList;

/* Key kargavorel*/
