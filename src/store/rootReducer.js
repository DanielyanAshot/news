import { combineReducers } from 'redux';
import { sourcesSlice } from './slices/sources';
import { articlesSlice } from './slices/articles';

const rootReducer = combineReducers({
  sources: sourcesSlice.reducer,
  articles: articlesSlice.reducer,
});

export default rootReducer;
