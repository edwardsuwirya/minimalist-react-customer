export const userIdSelector = state => {
    console.log(state)
    return state.loginReducer.userId
}
