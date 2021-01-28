import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './index';

const middlewares = [thunkMiddleware, logger];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composedEnhancer);

export default store;
