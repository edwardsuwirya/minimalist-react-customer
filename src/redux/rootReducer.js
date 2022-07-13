import {combineReducers} from "redux";
import {loginReducer} from "../features/login/LoginReducer";

export const rootReducer = () => {
    return combineReducers({
        loginReducer,
    })
}
