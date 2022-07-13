import {USER_LOGIN, USER_LOGOUT} from "../../redux/constants";

const loginInitialState = {
    userId: '',
}

export const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                userId: action.payload.userId
            })
        case USER_LOGOUT:
            return Object.assign({}, state, {
                userId: ''
            })
        default:
            return state
    }
}
