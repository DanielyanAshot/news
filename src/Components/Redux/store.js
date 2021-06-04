import { createStore, compose } from 'redux';
import getDataReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(getDataReducer, /* preloadedState, */ composeEnhancers());

export default store;
