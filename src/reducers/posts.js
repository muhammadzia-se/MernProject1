import { CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_ALL_POST, POST_LIKE_COUNT } from '../constants/actionTypes.js'

export const posts =  (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POST:
           return action.payload
        case CREATE_POST:
           return [...posts, action.payload]
        case UPDATE_POST:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
        case DELETE_POST:
            return posts.filter((post) => post._id !== action.payload)
        case POST_LIKE_COUNT:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
        default:
            return posts;
    }
}
export default posts