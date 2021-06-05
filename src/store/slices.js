import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const dataApi = createAsyncThunk('news/getData', async (thunkAPI) => {
  const response = await fetch(`https://newsapi.org/v2/sources?apiKey=d2719bc29082418883ea1aa824d3d502`, {
    signal: thunkAPI.signal,
  });
  return await response.json();
});

export const dataSlice = createSlice({
  name: 'news',
  initialState: {
    lists: [],
    pending: false,
    error: null,
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [dataApi.pending]: (state) => {
      if (!state.pending) {
        state.pending = true;
      }
    },
    [dataApi.fulfilled]: (state, action) => {
      if (state.pending) {
        state.pending = false;
        state.entities.push(action.payload);
      }
    },
    [dataApi.rejected]: (state, action) => {
      if (state.pending) {
        state.pending = false;
        state.error = action.error;
      }
    },
  },
});

export const selectDataLists = (state) => state.data.lists;

export default dataSlice.reducer;
