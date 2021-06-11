import './styles.scss';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import ArticlesList from '../../reusable/Articles/ArticlesList';
import Filter from '../../reusable/Filter';
import Sort from '../../reusable/Sort';
import useQuery from '../../../hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import {
  articlesSlice,
  fetchArticlesThunk,
  selectArticles,
  selectArticlesLoading,
} from '../../../store/slices/articles';
import generateQS from '../../../helpers/generateQS';
import qs from 'qs';
import { fetchSourcesThunk, selectSources } from '../../../store/slices/sources';
import history from '../../../helpers/history';
import pageConstants from '../../../constants/pageConstants';

const SearchPage = () => {
  const query = useQuery();
  const sources = useSelector(selectSources);
  const articles = useSelector(selectArticles);
  const articlesLoading = useSelector(selectArticlesLoading);
  const dispatch = useDispatch();
  const [sortChangingState, setSortChangingState] = useState(['desc', 'asc']);

  const handleOnChange = (values) => {
    const path = qs.stringify(values);
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

    if (qs.stringify(params)) {
      dispatch(fetchArticlesThunk(params));
    } else {
      dispatch(articlesSlice.actions.clear());
    }
  }, [dispatch, query]);

  useEffect(() => {
    dispatch(fetchSourcesThunk());
  }, [dispatch]);

  const handleOnNext = () => {
    const params = generateQS({
      ...query,
      pageSize: articles?.length + pageConstants.PAGE_SIZE,
    });

    dispatch(fetchArticlesThunk(params));
  };

  return (
    <div className="searchPage">
      <Filter sources={sources} onChange={handleOnChange} />

      <InfiniteScroll
        dataLength={articles?.length}
        next={handleOnNext}
        hasMore={articles?.length <= 99}
        loader={<Spin />}
        endMessage={<h1>Sorry but we cant show you more than 100 articles</h1>}
      >
        {articlesLoading && !articles?.length ? (
          <div className="loadingScreen">
            <div className="loader" />
            <span className="loading">Loading ...</span>
          </div>
        ) : (
          <div className="sort-articles">
            <Sort changeSort={changeSort} />

            <ArticlesList sortChangingState={sortChangingState} articles={articles} />
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default SearchPage;
