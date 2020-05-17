const initState = {
    userAuthResponse: ""
}


const UserAuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RESTART_AUTH_RESPONSE':
            return {
                ...state,
                userAuthResponse: ""
            }
        case 'LOADING':
            return {
                ...state,
                userAuthResponse: 'loading...'
            }
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                userAuthResponse: action.payload
            }
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                userAuthResponse: action.payload
            }
        default:
            return state;
    }
}

export default UserAuthReducer;
