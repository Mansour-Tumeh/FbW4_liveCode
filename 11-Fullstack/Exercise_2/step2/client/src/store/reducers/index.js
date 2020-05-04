import {combineReducers} from 'redux'
import movieReducer from './MovieReducers'

export default combineReducers({
    movies: movieReducer
}) 
