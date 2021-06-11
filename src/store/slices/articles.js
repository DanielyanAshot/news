import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiService from '../../services/apiService';

export const fetchArticlesThunk = createAsyncThunk('articles/fetch', async (params) => {
  const response = await apiService(`/top-headlines`, {
    params: {
      ...params,
      page: 1,
    },
  });

  const { data } = response;

  return data;
});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    data: [],
    pending: false,
    error: null,
  },
  reducers: {
    clear(state) {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchArticlesThunk.pending]: (state) => {
      if (!state.pending) {
        state.pending = true;
      }
    },
    [fetchArticlesThunk.fulfilled]: (state, action) => {
      if (state.pending) {
        state.pending = false;
        state.data = action.payload;
      }
    },
    [fetchArticlesThunk.rejected]: (state, action) => {
      if (state.pending) {
        state.pending = false;
        state.error = action.error;
      }
    },
  },
});

export const selectArticles = (state) => state.articles.data.articles;
export const selectArticlesLoading = (state) => state.articles.pending;
export const selecttTotalResults = (state) => state.articles.data.totalResults;
