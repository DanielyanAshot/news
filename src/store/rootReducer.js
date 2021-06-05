import { combineReducers } from 'redux';
import { sourcesSlice } from './slices/sources';

const rootReducer = combineReducers({
  sources: sourcesSlice.reducer,
});

export default rootReducer;
