import './index.scss';
import { useEffect, useState } from 'react';
import ArticlesList from '../../reusable/Articles/ArticlesList';
import Filter from '../../reusable/Filter';
import Sort from '../../reusable/Sort';
import GetQuery from '../../reusable/GetQuery';

const SearchPage = () => {
  const [articles, setArticles] = useState();
  const [source, setSource] = useState(GetQuery('sources'));
  const q = GetQuery('q');
  const [category, setCategory] = useState(false);
  const [country, setCountry] = useState(false);

  const categoryFilter = (newCategory) => {
    setCategory(newCategory);
  };

  const countryFilter = (newCountry) => {
    setCountry(newCountry);
  };

  const sourceFilter = (newSource) => {
    setSource(newSource);
  };

  const changeSort = (articles) => {
    let newArticles = { ...articles };
    newArticles.articles = newArticles.articles.reverse();
    setArticles(newArticles);
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=f6412f4f7b2741c58e527e0b6c8738e4&pageSize=20&page=1${
        !!source ? `&sources=${source}` : ''
      }${!!q ? `&q=${q}` : ''}${!!category ? `&category=${category}` : ''}${!!country ? `&country=${country}` : ''}`,
    )
      .then((response) => response.json())
      .then((response) => {
        setArticles(response);
      });
  }, [setArticles, source, q, category, country]);

  if (!!articles) {
    return (
      <div className="searchPage">
        <Filter
          categoryFilter={categoryFilter}
          countryFilter={countryFilter}
          sourceFilter={sourceFilter}
          category={category}
          source={source}
          country={country}
        />
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
