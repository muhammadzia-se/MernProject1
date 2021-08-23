import { AUTH, SUCCESS, ERROR } from '../constants/actionTypes.js'
// importing Apis to complete the action process
import  * as api from '../api'

export const signin = (formData, history) => async(dispatch) => {
    try {
        const { data }  = await api.signIn(formData)
        console.log(data);
        dispatch({ type:AUTH, data})
        dispatch({ type:SUCCESS, payload: {alert: true, message:"Successfully LoggedIn", severity: 'success'}})
        history.push('/')
    } catch (error) {
        const message = error.response.data.message
        dispatch({ type:ERROR, payload: {alert: true, message, severity: 'error'}})
    }
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        console.log(formData);
        const { data }  = await api.signUp(formData)
        console.log(data);
        dispatch({ type:AUTH, data})
        history.push('/')
    } catch (error) {
        console.log(error);
    }
}