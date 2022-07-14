import {
    USER_LOGIN_ERROR,
    USER_LOGIN_FINISHED,
    USER_LOGIN_STARTED,
    USER_LOGOUT_ERROR, USER_LOGOUT_FINISHED,
    USER_LOGOUT_STARTED
} from "../../redux/constants";

const loginInitialState = {
    loading: false,
    error: null,
    userId: '',
}

export const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case USER_LOGOUT_STARTED:
        case USER_LOGIN_STARTED:
            return Object.assign({}, state, {
                loading: true,
                error: ''
            })
        case USER_LOGIN_FINISHED:
            return Object.assign({}, state, {
                loading: false,
                userId: action.payload.userId

            })
        case USER_LOGOUT_FINISHED:
            return Object.assign({}, state, {
                loading: false,
                userId: ''

            })
        case USER_LOGOUT_ERROR:
        case USER_LOGIN_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.payload.error
            })
        default:
            return state
    }
}
