export const userIdSelector = state => {
    console.log(state)
    return state.loginReducer.userId
}
export const loadingSelector = state => {
    console.log(state)
    return state.loginReducer.loading
}
export const errorSelector = state => {
    console.log(state)
    return state.loginReducer.error
}
