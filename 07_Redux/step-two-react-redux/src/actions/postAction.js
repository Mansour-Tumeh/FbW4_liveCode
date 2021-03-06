import {
    FETCH_POSTS,
    NEW_POST
} from './types'


import axios from 'axios'

// export function fetchPosts() {
//     return async function (dispatch) {
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         dispatch({
//             type: FETCH_POSTS,
//             payload: res.data
//         })
//     }
// }

export const fetchPosts = () => async dispatch => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    dispatch({
        type: FETCH_POSTS,
        payload: res.data
    })

}