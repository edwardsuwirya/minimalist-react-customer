import {USER_LOGIN, USER_LOGOUT} from "../../redux/constants";

export const userLogin = (userId) => {
    return {
        type: USER_LOGIN,
        payload: {
            userId: userId,
        }
    }
}
export const userLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}
