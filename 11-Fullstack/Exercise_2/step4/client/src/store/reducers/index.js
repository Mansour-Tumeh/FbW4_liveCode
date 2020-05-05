import {combineReducers} from 'redux'
import movieReducer from './MovieReducers'
import reviewReducer from './ReviewReducers'

export default combineReducers({
    movies: movieReducer,
    reviews: reviewReducer
}) 
