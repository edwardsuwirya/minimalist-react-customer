import {
    USER_LOGIN_ERROR,
    USER_LOGIN_FINISHED,
    USER_LOGIN_STARTED,
    USER_LOGOUT_ERROR, USER_LOGOUT_FINISHED,
    USER_LOGOUT_STARTED
} from "../../redux/constants";

export const userLoginStarted = () => {
    return {
        type: USER_LOGIN_STARTED,
    }
}
export const userLoginFinished = (userId) => {
    return {
        type: USER_LOGIN_FINISHED,
        payload: {
            userId: userId,
        }
    }
}
export const userLoginError = (error) => {
    return {
        type: USER_LOGIN_ERROR,
        payload: {
            error: error,
        }
    }
}
export const userLogoutStarted = () => {
    return {
        type: USER_LOGOUT_STARTED,
    }
}
export const userLogoutError = (error) => {
    return {
        type: USER_LOGOUT_ERROR,
        payload: {
            error: error,
        }
    }
}
export const userLogoutFinished = () => {
    return {
        type: USER_LOGOUT_FINISHED,
    }
}
