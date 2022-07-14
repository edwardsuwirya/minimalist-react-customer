export const userIdSelector = state => {
    console.log(state)
    return state.login.userId
}
export const loadingSelector = state => {
    console.log(state)
    return state.login.loading
}
export const errorSelector = state => {
    console.log(state)
    return state.login.error
}
