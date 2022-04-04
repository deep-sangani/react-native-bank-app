import {createStore, applyMiddleware, compose} from 'redux';

import reducer from './reducers/index';

import rootSaga from './reduxsaga';
import createSagaMiddleware from 'redux-saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
export default store;
