const SingleArticle = ({ article }) => (
  <div style={{ width: '500px', height: '200px', border: '1px solid' }}>
    <p>{article.author}</p>
    <p>{article.publishedAt}</p>
    <img width={100} src={article.urlToImage} />
  </div>
);

export default SingleArticle;
