import { configureStore } from '@reduxjs/toolkit';
import reducers from './slices';

var store = configureStore({ reducer: { reducers } });

export default store;
