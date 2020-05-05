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

const initialState = {
    isLoading: false,
    error: false,
    errorMessage: '',
    reviewsList: [],
    newReview: {},
    deletedReview: {},
    updatedReview: {},
    movieReviews: []
}



export default function reviewReducer (state = initialState,action) {
    let newReviewsList;
    
    switch (action.type) {
        case FETCH_REVIEWS_BEGIN:
        case FETCH_MOVIE_REVIEWS_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: ''
            }
        
        case FETCH_MOVIE_REVIEWS_FAIL:
        case FETCH_REVIEWS_FAIL:
        case SAVE_REVIEWS_FAIL:
        case DELETE_REVIEWS_FAIL:
        case UPDATE_REVIEWS_FAIL:
            return {
                ...state,
                error: true,
                errorMessage: action.payload,
                isLoading: false
            }
        
        case FETCH_MOVIE_REVIEWS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                movieReviews: action.payload
            }
        
        case FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                reviewsList: action.payload
            }
        
        case SAVE_REVIEWS_SUCCESS:
            newReviewsList = [...state.reviewsList, action.payload]
            return {
                ...state,
                reviewsList: newReviewsList,
                newReview: action.paload
            }
            
        case UPDATE_REVIEWS_SUCCESS:
            
            newReviewsList = state.reviewsList.map(review=>{
                if(review._id === action.payload._id){
                    return action.payload
                }else{
                    return review._id
                }
            })

            return {
                ...state,
                reviewsList: newReviewsList,
                updatedReview: action.payload
            }
        case DELETE_REVIEWS_SUCCESS:

            newReviewsList = state.reviewsList.filter(review =>{
                if(review._id === action.payload._id){
                    return false
                }else{
                    return true
                }
            })
            
            return {
                ...state,
                reviewsList: newReviewsList,
                deletedReview: action.payload
            }

        default:
            return state
    }


}