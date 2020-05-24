const initState = {
    postResponse:""
}


const PostReducer = (state=initState, action) =>{
    switch (action.type) {

        case 'LOADING_CREATE_POST':
            return {
                ...state,
                postResponse: 'loading'
            }
        case 'CREATE_POST_SUCCESS':
        case 'CREATE_POST_FAILED':
            console.log(action)
            return {
                ...state,
                postResponse: action.res,
            }
        default:
            return state

    }
}

export default PostReducer;
