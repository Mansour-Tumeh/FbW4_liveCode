import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../reducers';
//since I name the js file as index it is not required to include it in the import path

const intialState = {}
const middleware = [thunk]

const store = createStore(rootReducer, intialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


export default store;