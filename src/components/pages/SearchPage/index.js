import './index.scss';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import ArticlesList from '../../reusable/Articles/ArticlesList';
import Sort from '../../reusable/Sort';
import Filter from '../../reusable/Filter';

const SearchPage = () => {
  const [articles, setArticles] = useState();
  const source = new URLSearchParams(useLocation().search).get('sources');
  const q = new URLSearchParams(useLocation().search).get('q');
  const [sortBy, setSortBy] = useState(new URLSearchParams(useLocation().search).get('sortBy'));
  const changeSort = (newSort) => {
    setSortBy(newSort);
  };
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?apiKey=e5036322e3a24bee9b3f1211b96e3b62&pageSize=20&page=1${
        !!source ? `&sources=${source}` : ''
      }${!!q ? `&q=${q}` : ''}${!!sortBy ? `&sortBy=${sortBy}` : '&sortBy=popularity'}`,
    )
      .then((response) => response.json())
      .then((response) => {
        setArticles(response);
      });
  }, [setArticles, source, q, sortBy]);

  if (!!articles) {
    return (
      <div className="searchPage">
        <Filter />
        <div className="sort-articles">
          <Sort changeSort={changeSort} />
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
