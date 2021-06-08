import './index.scss';
import { useEffect, useState } from 'react';
import ArticlesList from '../../reusable/Articles/ArticlesList';
import Filter from '../../reusable/Filter';
import Sort from '../../reusable/Sort';
import GetQuery from '../../reusable/GetQuery';

const SearchPage = () => {
  const [articles, setArticles] = useState();
  const source = GetQuery('sources');
  const q = GetQuery('q');

  const changeSort = (articles) => {
    let newArticles = { ...articles };
    newArticles.articles = newArticles.articles.reverse();
    setArticles(newArticles);
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=d2719bc29082418883ea1aa824d3d502&pageSize=20&page=1${
        !!source ? `&sources=${source}` : ''
      }${!!q ? `&q=${q}` : ''}`,
    )
      .then((response) => response.json())
      .then((response) => {
        setArticles(response);
      });
  }, [setArticles, source, q]);

  if (!!articles) {
    return (
      <div className="searchPage">
        <Filter />
        <div className="sort-articles">
          <Sort articles={articles} changeSort={changeSort} />
          <ArticlesList articles={articles} />
        </div>
      </div>
    );
  }

  return (
    <div className="loadingScreen">
      <div className="loader"></div>
      <span className="loading">Loading ...</span>
    </div>
  );
};

export default SearchPage;
