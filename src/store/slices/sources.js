import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiService from '../../services/apiService';

export const fetchSourcesThunk = createAsyncThunk('news/fetch', async () => {
  const response = await apiService(`/sources`);
  const {
    data: { sources },
  } = response;

  return sources;
});

export const sourcesSlice = createSlice({
  name: 'sources',
  initialState: {
    data: [],
    pending: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchSourcesThunk.pending]: (state) => {
      if (!state.pending) {
        state.pending = true;
      }
    },
    [fetchSourcesThunk.fulfilled]: (state, action) => {
      if (state.pending) {
        state.pending = false;
        state.data = action.payload;
      }
    },
    [fetchSourcesThunk.rejected]: (state, action) => {
      if (state.pending) {
        state.pending = false;
        state.error = action.error;
      }
    },
  },
});

export const selectSources = (state) => state.sources.data;
