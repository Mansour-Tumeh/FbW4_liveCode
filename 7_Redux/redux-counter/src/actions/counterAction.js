import {
    INCREMENT,
    DECREMENT,
    ADD_FIVE,
    SUB_FIVE
} from './types'




export const addOne = () => dispatch => {
    dispatch({
        type: INCREMENT,
        payload: 1
    })
}

export const subOne = () => dispatch => {
    dispatch({
        type: DECREMENT,
        payload: 1
    })
}

export const addFive = () => dispatch => {
    dispatch({
        type: ADD_FIVE,
        payload: 5
    })
}

export const subFive = () => dispatch => {
    dispatch({
        type: SUB_FIVE,
        payload: 5
    })
}