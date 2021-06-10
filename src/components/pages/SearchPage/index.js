import './index.scss';
import { useEffect, useState } from 'react';
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
  const fetchUrl = `https://newsapi.org/v2/top-headlines?apiKey=b9480c6c601d485d9794e1ab45627dff&pageSize=20${
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
    const response = await fetch(fetchUrl + `&page=${(articles.length + 1) / 20}`);
    const response_1 = await response.json();
    console.log(articles.concat(response_1.articles));
    setArticles(articles.concat(response_1.articles));
  };

  if (!!articles) {
    return (
      <div className="searchPage">
        {!source && (
          <Filter
            categoryFilter={categoryFilter}
            countryFilter={countryFilter}
            sourceFilter={sourceFilter}
            category={category}
            source={source}
            country={country}
          />
        )}
        <div className="sort-articles">
          <Sort changeSort={changeSort} />
          <InfiniteScroll
            dataLength={articles.length}
            next={newPage}
            hasMore={articles.length <= 99}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>Yay! You have seen it all</h4>}
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
