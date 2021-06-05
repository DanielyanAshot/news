import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSourcesThunk = createAsyncThunk('news/getData', async () => {
  const response = await fetch(`https://newsapi.org/v2/sources?apiKey=79f6eb041e67493ba5fb2ede313d92da`);
  const { sources } = await response.json();
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
    // Add reducers for additional action types here, and handle loading state as needed
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
