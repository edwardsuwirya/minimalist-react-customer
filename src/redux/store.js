import {configureStore} from '@reduxjs/toolkit'
import loginReducer from '../features/login/LoginSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer
    },
})
