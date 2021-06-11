import './index.scss';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import ArticlesList from '../../reusable/Articles/ArticlesList';
import Filter from '../../reusable/Filter';
import Sort from '../../reusable/Sort';
import GetQuery from '../../reusable/GetQuery';
import InfiniteScroll from 'react-infinite-scroll-component';

const SearchPage = () => {
  const [articles, setArticles] = useState();
  const [sortChangingState, setSortChangingState] = useState(['desc', 'asc']);
  const [source, setSource] = useState(GetQuery('sources'));
  const q = GetQuery('q');
  const [category, setCategory] = useState(false);
  const [country, setCountry] = useState(false);
  const fetchUrl = `https://newsapi.org/v2/top-headlines?apiKey=f6412f4f7b2741c58e527e0b6c8738e4&pageSize=20${
    !!source ? `&sources=${source}` : ''
  }${!!q ? `&q=${q}` : ''}${!!category ? `&category=${category}` : ''}${!!country ? `&country=${country}` : ''}`;
  const categoryFilter = (newCategory) => {
    setCategory(newCategory);
  };

  const countryFilter = (newCountry) => {
    setCountry(newCountry);
  };

  const sourceFilter = (newSource) => {
    setSource(newSource);
  };

  const changeSort = () => {
    let newSort = [...sortChangingState];
    newSort = newSort.reverse();
    setSortChangingState(newSort);
  };

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((response) => {
        setArticles(response.articles);
      });
  }, [setArticles, fetchUrl]);

  const newPage = async () => {
    const response = await fetch(fetchUrl + `&page=${articles.length / 20 + 1}`);
    const response_1 = await response.json();
    setArticles(articles.concat(response_1.articles));
  };

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
        <div>
          <Sort changeSort={changeSort} />
        </div>
        <div className="sort-articles">
          <InfiniteScroll
            dataLength={articles.length}
            next={newPage}
            hasMore={articles.length <= 99}
            loader={<Spin />}
            endMessage={<h1>Sorry but we cant show you more than 100 articles</h1>}
          >
            <ArticlesList sortChangingState={sortChangingState} articles={articles} />
          </InfiniteScroll>
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
