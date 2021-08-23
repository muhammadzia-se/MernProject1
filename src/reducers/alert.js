import { SUCCESS, INFO, ERROR, CLOSE } from '../constants/actionTypes'

const alertReducer = (state = { alert: false, severity:'' , message: '' }, action) => {
    switch (action.type) {
        case SUCCESS:
            return { ...state, alert: action.payload }
        case ERROR:
            return { ...state, alert: action.payload }
        case CLOSE:
            return { ...state, alert: action.payload }
        default:
            return state
    }
}

export default alertReducer