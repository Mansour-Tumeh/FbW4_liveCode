import {

    FETCH_REVIEWS_BEGIN,
    FETCH_REVIEWS_SUCCESS,
    FETCH_REVIEWS_FAIL,
    
    SAVE_REVIEWS_FAIL,
    SAVE_REVIEWS_SUCCESS,

    DELETE_REVIEWS_FAIL,
    DELETE_REVIEWS_SUCCESS,

    UPDATE_REVIEWS_FAIL,
    UPDATE_REVIEWS_SUCCESS,

    FETCH_MOVIE_REVIEWS_BEGIN,
    FETCH_MOVIE_REVIEWS_SUCCESS,
    FETCH_MOVIE_REVIEWS_FAIL

} from '../types'

import serverapi from '../../api/serverapi'

const fetchReviewsBegin = () => ({
    type: FETCH_REVIEWS_BEGIN
})

const fetchReviewsSuccess = (reviews) => ({
    type: FETCH_REVIEWS_SUCCESS,
    payload: reviews
})

const fetchReviewsFail = (error) => ({
    type: FETCH_REVIEWS_FAIL,
    payload: error
})

export const getReviews  = () => {
    
    return dispatch => {

        dispatch(fetchReviewsBegin())

        return serverapi.getReviewsList()
                .then(response => {
                    dispatch(fetchReviewsSuccess(response.data))
                }).catch(error=>{
                    dispatch(fetchReviewsFail(error))
                })

    }
}


const fetchMovieReviewsBegin = () => ({
    type: FETCH_MOVIE_REVIEWS_BEGIN
})

const fetchMovieReviewsSuccess = (movieReviews) => ({
    type: FETCH_MOVIE_REVIEWS_SUCCESS,
    payload: movieReviews
})

const fetchMovieReviewsFail = (error) => ({
    type: FETCH_MOVIE_REVIEWS_FAIL,
    payload: error
})

export const getMovieReviews  = (movieID) => {
    
    return dispatch => {

        dispatch(fetchMovieReviewsBegin())

        return serverapi.getMovieReview(movieID)
                .then(response => {
                    dispatch(fetchMovieReviewsSuccess(response.data))
                }).catch(error=>{
                    dispatch(fetchMovieReviewsFail(error))
                })
    }
}


const saveReviewsSuccess = (movieReviews) => ({
    type: SAVE_REVIEWS_SUCCESS,
    payload: movieReviews
})

const saveReviewsFail = (error) => ({
    type: SAVE_REVIEWS_FAIL,
    payload: error
})

export const saveReviews  = (data) => {
    
    return dispatch => {

        return serverapi.saveReview(data)
                .then(response => {
                    dispatch(saveReviewsSuccess(response.data))
                }).catch(error=>{
                    dispatch(saveReviewsFail(error))
                })
    }
}

const updateReviewsSuccess = (movieReviews) => ({
    type: UPDATE_REVIEWS_SUCCESS,
    payload: movieReviews
})

const updateReviewsFail = (error) => ({
    type: UPDATE_REVIEWS_FAIL,
    payload: error
})

export const updateReviews  = (data) => {
    
    return dispatch => {

        return serverapi.updateReview(data)
                .then(response => {
                    dispatch(updateReviewsSuccess(response.data))
                }).catch(error=>{
                    dispatch(updateReviewsFail(error))
                })
    }
}


const deleteReviewsSuccess = (movieReviews) => ({
    type: DELETE_REVIEWS_SUCCESS,
    payload: movieReviews
})

const deleteReviewsFail = (error) => ({
    type: DELETE_REVIEWS_FAIL,
    payload: error
})

export const deleteReviews  = (data) => {
    
    return dispatch => {
        config = {data:data}
        return serverapi.deleteReview(data)
                .then(response => {
                    dispatch(deleteReviewsSuccess(response.data))
                }).catch(error=>{
                    dispatch(deleteReviewsFail(error))
                })
    }
}

