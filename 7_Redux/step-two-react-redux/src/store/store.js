import {
    createStore,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../reducers/';
//since I name the js file as index it is not required to include it in the import path

const intialState = {}
const middleware = [thunk]

const store = createStore(rootReducer, intialState, applyMiddleware(...middleware))


export default store;