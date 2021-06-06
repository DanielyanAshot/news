const SingleArticle = ({ article }) => (
  <div>
    <p>{article.description}</p>
    <img src={article.urlToImage}></img>
  </div>
);

export default SingleArticle;
