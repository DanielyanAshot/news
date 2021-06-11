import './styles.scss';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import ArticlesList from '../../reusable/Articles/ArticlesList';
import Filter from '../../reusable/Filter';
import Sort from '../../reusable/Sort';
import useQuery from '../../../hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticlesThunk, selectArticles } from '../../../store/slices/articles';
import generateQS from '../../../helpers/generateQS';
import qs from 'qs';
import { fetchSourcesThunk, selectSources } from '../../../store/slices/sources';
import history from '../../../helpers/history';

const SearchPage = () => {
  const query = useQuery();
  const sources = useSelector(selectSources);
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();
  const [sortChangingState, setSortChangingState] = useState(['desc', 'asc']);

  const handleOnChange = (type, values) => {
    const data = {
      ...query,
    };

    if (values.length) {
      data[type] = values.join(',');
    } else {
      delete data[type];
    }

    const path = qs.stringify(data);
    history.push(`/search?${path}`);
  };

  const changeSort = () => {
    let newSort = [...sortChangingState];
    newSort = newSort.reverse();
    setSortChangingState(newSort);
  };

  useEffect(() => {
    const params = generateQS({
      ...query,
    });

    dispatch(fetchArticlesThunk(params));
  }, [dispatch, query]);

  useEffect(() => {
    dispatch(fetchSourcesThunk());
  }, [dispatch]);

  const newPage = () => {
    const params = generateQS({
      ...query,
      pageSize: articles.length + 20,
    });

    dispatch(fetchArticlesThunk(params));
  };

  if (!!articles) {
    return (
      <div className="searchPage">
        <Filter sources={sources} onChange={handleOnChange} />

        <div className="sort-articles">
          <Sort changeSort={changeSort} />
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
