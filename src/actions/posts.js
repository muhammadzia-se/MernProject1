import { CREATE_POST, UPDATE_POST, FETCH_ALL_POST, DELETE_POST, POST_LIKE_COUNT } from '../constants/actionTypes.js'
// importing Apis to complete the action process
import  * as api from '../api'

// Action Creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({type: FETCH_ALL_POST, payload: data})
    } catch (error) {
        console.log(error);
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({type: CREATE_POST, payload: data})
    } catch (error) {
        console.log(error);
    }

}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({type: UPDATE_POST, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE_POST, payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const updatePostLikeCount = (id) => async (dispatch) => {
    try {
        const { data } = await api.updatePostLikeCount(id);
        dispatch({type: POST_LIKE_COUNT, payload: data})
    } catch (error) {
        console.log(error);
    }
}