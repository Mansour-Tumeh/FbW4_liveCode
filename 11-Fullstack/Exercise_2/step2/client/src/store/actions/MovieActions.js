import {

    FETCH_MOVIE_BEGIN,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAIL,
    FETCH_SEARCH_BEGIN,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAIL

} from '../types'

import omdbapi from '../../api/omdb'


//It is needed to use the parentheses to specify that we want to return
//the object inside the {} and not declaring a function
const fetchSearchBegin = () => ({
    type: FETCH_SEARCH_BEGIN
})

const fetchSearchSuccess = (movies) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: movies
})

const fetchSearchFail = (error) => ({
    type: FETCH_SEARCH_FAIL,
    payload:error
})


export const searchMovies = (query) =>{

    return dispatch => {
        dispatch(fetchSearchBegin())

        return omdbapi.searchMovies(query)
                .then(response => {

                    dispatch(fetchSearchSuccess(response.data.Search))
                }).catch(error => {
                    dispatch(fetchSearchFail(error))
                })
    }
}


const fetchMovieBegin = () => ({
    type: FETCH_MOVIE_BEGIN
})

const fetchMovieSuccess = (movieInfo) => ({
    type: FETCH_MOVIE_SUCCESS,
    payload: movieInfo
})

const fetchMovieFail = (error) =>({
    type: FETCH_MOVIE_FAIL,
    payload: error
})

export const getMovieInfo = (movieID) => {

    return dispatch => {

        dispatch(fetchMovieBegin())

        return omdbapi.getSingleMovie(movieID)
                .then(response=>{
                    dispatch(fetchMovieSuccess(response.data))
                }).catch(error=>{
                    dispatch(fetchMovieFail(error))
                })
    }
}