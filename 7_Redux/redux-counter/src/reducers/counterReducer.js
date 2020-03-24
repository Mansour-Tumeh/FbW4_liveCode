import {
    INCREMENT,
    DECREMENT,
    ADD_FIVE,
    SUB_FIVE
} from '../actions/types'


const initialState = {
    counter: 0
}
export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - action.payload
            };
        case ADD_FIVE:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case SUB_FIVE:
            return {
                ...state,
                counter: state.counter - action.payload
            };
        default:
            return state;
    }
}