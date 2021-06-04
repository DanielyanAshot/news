import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const dataApi = createAsyncThunk('news/getData', async (userId, thunkAPI) => {
  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
    signal: thunkAPI.signal,
  });
  return await response.json();
});

export const dataSlice = createSlice({
  name: 'news',
  data: {
    lists: [],
    loading: 'idle',
    error: null,
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [dataApi.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [dataApi.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.entities.push(action.payload);
        state.currentRequestId = undefined;
      }
    },
    [dataApi.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  },
});

export const selectDataLists = (state) => state.data.lists;

export default dataSlice.reducer;
