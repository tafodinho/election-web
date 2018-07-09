import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from './reducers';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { loadState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const PersistState = loadState();
const logger = createLogger();

const Store = createStore(
    Reducer,
    PersistState,
   // applyMiddleware(thunk, logger),
    composeEnhancers(

        applyMiddleware(thunk, logger)
    ));


// );

export default Store;
