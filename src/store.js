import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware();
let middleware = [
    thunk,
    sagaMiddleware
];

if (process.env.NODE_ENV !== 'production') {
    const {createLogger} = require('redux-logger');
    const logger = createLogger();
    middleware = [...middleware, logger];
}


export function configureStore(preloadedState) {
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
   sagaMiddleware.run(rootSaga);
    return store;
}