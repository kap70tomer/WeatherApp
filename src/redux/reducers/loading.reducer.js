const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_LOADING':
            return false
        default:
            return state
    }
}
export default loadingReducer
