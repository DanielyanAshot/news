const SingleArticle = ({ article }) => (
  <div>
    <p>{article.author}</p>
    <p>{article.publishedAt}</p>
    <img src={article.urlToImage}></img>
  </div>
);

export default SingleArticle;
