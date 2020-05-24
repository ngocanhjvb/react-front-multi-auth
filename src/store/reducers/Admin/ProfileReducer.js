const initState = {
    adminProfile:""
    }


    const AdminProfileReducer = (state=initState, action) =>{
        switch (action.type) {

            case 'LOADING':
                return {
                    ...state,
                    adminProfile: 'loading'
                }

            case 'LOAD_PROFILE_ADMIN_SUCCESS':
            case 'LOAD_PROFILE_ADMIN_ERROR':
                console.log(action)

                return {
                    ...state,
                    adminProfile: action.res,
                }

            case 'CODE_ERROR':
                console.log(action)
                return {
                                ...state,
                                adminProfile:'there seems to be a problem please refresh your browser',
                            }


            default:
                    return state

        }
    }

export default AdminProfileReducer;
