import { combineReducers } from "redux";
import posts from './posts'
import authReducer from './auth'
import alert from './alert'

export default combineReducers({ posts, authReducer, alert })