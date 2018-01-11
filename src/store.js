import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import logger from 'redux-logger';
import reducer from './redux/reducer';

export default createStore(reducer, applyMiddleware(promiseMiddleware()));
// export default createStore(reducer, applyMiddleware(promiseMiddleware(), logger));