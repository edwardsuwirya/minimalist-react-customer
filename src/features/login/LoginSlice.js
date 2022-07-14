import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    userId: '',
}

export const loginSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        userLoginStarted: (state) => {
            state.loading = true
            state.error = ''
        },
        userLoginFinished: (state, action) => {
            state.loading = false
            state.userId = action.payload.userId
        },
        userLoginError: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
        userLogoutStarted: (state) => {
            state.loading = true
            state.error = ''
        },
        userLogoutFinished: (state) => {
            state.loading = false
            state.userId = ''
        },
        userLogoutError: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
    },
})

export const {
    userLoginStarted,
    userLoginFinished,
    userLoginError,
    userLogoutStarted,
    userLogoutFinished,
    userLogoutError
} = loginSlice.actions

export default loginSlice.reducer
